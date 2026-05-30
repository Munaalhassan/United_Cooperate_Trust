<x-mail::message>
# Welcome to Prestige Trust Bank E-Banking

Dear {{ $user->first_name ?? $user->name }},

Thank you for logging in to your new E-Banking profile. Your secure account number has been generated successfully.

**Your E-Banking Account Number:**
# {{ $user->account_number }}

Please keep this number secure, as you will need it for future transactions and support inquiries.

<x-mail::button :url="route('ebanking.dashboard')">
Go to Dashboard
</x-mail::button>

If you did not request this or believe there is an error, please contact our support team immediately.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
