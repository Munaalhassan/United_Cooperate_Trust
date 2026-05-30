<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Your Account Number - Fulton Bank</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; color: #334155; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f8fafc; padding: 30px 0; }
        .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); overflow: hidden; border: 1px solid #e2e8f0; }
        
        .header { background-color: #0f172a; padding: 30px 20px; text-align: center; border-bottom: 4px solid #2563eb; }
        .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; }
        .header .accent { color: #3b82f6; }
        
        .content { padding: 35px 35px 25px 35px; }
        h2 { margin-top: 0; color: #0f172a; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 15px; }
        p { line-height: 1.6; color: #475569; margin-bottom: 20px; font-size: 14px; font-weight: 500; }
        
        .account-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px 20px; text-align: center; margin: 25px 0; position: relative; overflow: hidden; }
        .account-box::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background-color: #2563eb; }
        .account-box p.label { margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: #64748b; font-weight: 800; }
        .account-box p.account-number { font-family: 'Courier New', Courier, monospace; font-size: 34px; font-weight: bold; color: #0f172a; letter-spacing: 6px; margin: 15px 0 0 0 !important; }
        .icon { font-size: 20px; margin-bottom: 12px; display: block; color: #3b82f6; }
        
        .btn-container { text-align: center; margin: 30px 0; }
        .btn { display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; font-size: 13px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2); transition: background-color 0.3s ease; }
        .btn:hover { background-color: #1d4ed8; }
        
        .divider { height: 1px; background-color: #e2e8f0; margin: 25px 0; }
        
        .footer { text-align: center; padding: 25px 35px; font-size: 12px; color: #64748b; background-color: #f8fafc; border-top: 1px solid #e2e8f0; }
        .footer strong { color: #0f172a; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; }
        .security { font-size: 11px; color: #94a3b8; text-align: center; padding: 0 30px; margin-top: 20px; line-height: 1.6; max-width: 500px; margin-left: auto; margin-right: auto; text-transform: uppercase; letter-spacing: 0.5px; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="main">
            <div class="header">
                <h1>Fulton <span class="accent">Bank</span></h1>
            </div>
            <div class="content">
                <h2>Welcome, {{ $user->first_name ?? $user->name }}</h2>
                <p>Thank you for choosing Fulton Bank. Your secure E-Banking profile has been fully verified. We are pleased to issue your official account number.</p>
                
                <div class="account-box">
                    <p class="label">Your Official Account Number</p>
                    <p class="account-number">{{ $user->account_number }}</p>
                </div>
                
                <p>To finalize your setup and unlock your secure dashboard access, please confirm receipt of your new account number by clicking the activation button below.</p>
                
                <div class="btn-container">
                    <a href="{{ $url }}" class="btn">Activate Dashboard</a>
                </div>
                
                <div class="divider"></div>
                
                <p style="margin-bottom: 0; font-size: 12px; color: #94a3b8; font-weight: 500;">If you have any questions or require concierge assistance, our private banking support team is at your disposal 24/7.</p>
            </div>
            <div class="footer">
                <strong>Fulton Bank</strong> &copy; {{ date('Y') }}<br>
                <span style="margin-top: 5px; display: inline-block;">London, United Kingdom</span><br>
                <span style="font-size: 10px; margin-top: 10px; display: block; color: #cbd5e1; letter-spacing: 2px; text-transform: uppercase; font-weight: 800;">Excellence in Global Finance</span>
            </div>
        </div>
        <p class="security"><strong>SECURITY NOTICE:</strong> Fulton Bank will never ask for your password or full account details via email. If you did not request this communication, please contact us immediately.</p>
    </div>
</body>
</html>
