<?php

namespace App\Actions\Fortify;

use App\Actions\Teams\CreateTeam;
use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    public function __construct(private CreateTeam $createTeam)
    {
        //
    }

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRules(),
        ])->validate();

        return DB::transaction(function () use ($input) {
            $dlPath = null;
            if (isset($input['dl_upload']) && $input['dl_upload'] instanceof \Illuminate\Http\UploadedFile) {
                $dlPath = $input['dl_upload']->store('identity-docs', 'public');
            }

            $user = User::create([
                'name' => $input['first_name'] . ' ' . $input['last_name'],
                'first_name' => $input['first_name'],
                'last_name' => $input['last_name'],
                'username' => $input['username'],
                'email' => $input['email'],
                'phone' => $input['phone'],
                'gender' => $input['gender'],
                'dob' => $input['dob'],
                'country' => $input['country'],
                'ssn' => $input['ssn'],
                'dl' => $input['dl'],
                'dl_path' => $dlPath,
                'password' => $input['password'],
            ]);

            $this->createTeam->handle($user, $user->name."'s Team", isPersonal: true);

            return $user;
        });
    }
}
