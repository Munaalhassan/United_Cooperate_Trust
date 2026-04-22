<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PublicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $publications = [
            ['title' => 'Annual Report 2020', 'category' => 'Annual Reports'],
            ['title' => 'Annual Report 2019', 'category' => 'Annual Reports'],
            ['title' => 'Annual Report 2018', 'category' => 'Annual Reports'],
            ['title' => 'Annual Report 2017', 'category' => 'Annual Reports'],
            ['title' => 'Annual Report 2016', 'category' => 'Annual Reports'],
            ['title' => 'Annual Report 2015', 'category' => 'Annual Reports'],
            ['title' => 'Annual Report 2014', 'category' => 'Annual Reports'],
            
            ['title' => 'AML Questionnaire', 'category' => 'AML'],
            ['title' => 'AML CFT Statement', 'category' => 'AML'],
            
            ['title' => 'Your rights under PSD2', 'category' => 'PSD2'],
            ['title' => 'PSD2 Specific conditions', 'category' => 'PSD2'],
            ['title' => 'PSD2', 'category' => 'PSD2'],
            
            ['title' => 'Code of Conduct', 'category' => 'Code of Conduct'],
            
            ['title' => 'General Conditions', 'category' => 'Conditions'],
            ['title' => 'W-8BEN-E FORM', 'category' => 'Conditions'],
            ['title' => 'ABBL Guide – Switching bank accounts in USA', 'category' => 'Conditions'],
            ['title' => 'CRS Entity Self-Certification', 'category' => 'Conditions'],
            
            ['title' => 'SSIs USA Bank', 'category' => 'Payment Instructions'],
            
            ['title' => 'Pricing for Services applicable from 1st April 2022', 'category' => 'Tariffs'],
            ['title' => 'Pricing for Services April 2021', 'category' => 'Tariffs'],
            
            ['title' => 'Risk Disclosure', 'category' => 'MIFID II'],
            ['title' => 'MIFID General Information Document', 'category' => 'MIFID II'],
            ['title' => 'Best Execution Policy', 'category' => 'MIFID II'],
            ['title' => 'Top 5 Execution Venues 2020', 'category' => 'MIFID II'],
            ['title' => 'Top 5 Execution Venues 2019', 'category' => 'MIFID II'],
            ['title' => 'Top 5 Execution Venues 2018', 'category' => 'MIFID II'],
            
            ['title' => 'Benchmark Interest Rate Reforms', 'category' => 'Benchmark Interest Rate Reforms'],
            
            ['title' => 'SSIs London Branch', 'category' => 'London Branch'],
            ['title' => 'General Conditions London Branch', 'category' => 'London Branch'],
            ['title' => 'Specific Conditions London Branch', 'category' => 'London Branch'],
            ['title' => 'MIFID General Information Document London Branch', 'category' => 'London Branch'],
        ];

        foreach ($publications as $pub) {
            \App\Models\Publication::create([
                'title' => $pub['title'],
                'category' => $pub['category'],
                'file_type' => 'PDF',
                'file_size' => '1.2 MB', // Placeholder
                'published_at' => now(),
            ]);
        }
    }
}
