<x-mail::message>
# Welcome to Prestige Trust Bank E-Banking

Dear {{ $user->first_name ?? $user->name }},

Thank you for logging in to your new E-Banking profile. Your secure account number has been generated successfully.

**Your E-Banking Account Number:**
# {{ $user->account_number }}

Please keep this number secure, as you will need it for future transactions and support inquiries.

To complete your setup and access your dashboard, please confirm receipt of this account number:

<x-mail::button :url="$url">
Confirm Account Number
</x-mail::button>

If you did not request this or believe there is an error, please contact our support team immediately.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
