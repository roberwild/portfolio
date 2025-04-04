"use client";

import React from 'react';
import { usePortfolioWizardStore } from '@/lib/store/portfolio-wizard-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, ChevronRight } from 'lucide-react';

const InfoModal: React.FC = () => {
  const { nextStep } = usePortfolioWizardStore();

  return (
    <div className="w-full max-w-3xl mx-auto animate-fadeIn">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="rounded-full bg-primary/10 p-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-high-contrast">
          Bienvenido al Creador de Portfolios
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Una herramienta que te ayudará a diseñar y gestionar tu cartera de inversiones de manera personalizada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="overflow-hidden border-auto hover:border-primary/50 transition-colors duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                  <path d="M10 9H8"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Información básica</h3>
                <p className="text-muted-foreground text-sm">Define el nombre y el objetivo de inversión para tu portfolio.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-auto hover:border-primary/50 transition-colors duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/>
                  <path d="m5 16 3 4"/>
                  <path d="m19 16-3 4"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Evaluación de riesgo</h3>
                <p className="text-muted-foreground text-sm">Responde a preguntas para determinar tu perfil de riesgo como inversor.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-auto hover:border-primary/50 transition-colors duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"/>
                  <line x1="9" x2="9" y1="9" y2="9"/>
                  <line x1="15" x2="15" y1="9" y2="9"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Selección de activos</h3>
                <p className="text-muted-foreground text-sm">Elige las empresas y activos para incluir en tu portfolio.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-auto hover:border-primary/50 transition-colors duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Asignación y resumen</h3>
                <p className="text-muted-foreground text-sm">Define la distribución del capital y revisa el resumen de tu portfolio.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/5 rounded-lg p-6 mb-8 border-auto">
        <h3 className="font-semibold text-lg mb-3 flex items-center">
          <BarChart3 className="h-5 w-5 mr-2 text-primary" />
          Cómo funciona
        </h3>
        <ol className="space-y-3 pl-6 list-decimal">
          <li className="text-muted-foreground">
            <span className="text-high-contrast font-medium">Información básica:</span> Define el nombre y la inversión inicial de tu portfolio.
          </li>
          <li className="text-muted-foreground">
            <span className="text-high-contrast font-medium">Evaluación de riesgo:</span> Responde un breve cuestionario para determinar tu perfil de inversor.
          </li>
          <li className="text-muted-foreground">
            <span className="text-high-contrast font-medium">Selección de empresas:</span> Elige las empresas en las que deseas invertir.
          </li>
          <li className="text-muted-foreground">
            <span className="text-high-contrast font-medium">Asignación de activos:</span> Distribuye tus fondos entre las empresas seleccionadas.
          </li>
          <li className="text-muted-foreground">
            <span className="text-high-contrast font-medium">Resumen final:</span> Revisa y confirma tu portfolio antes de guardarlo.
          </li>
        </ol>
      </div>

      <div className="text-center">
        <Button 
          onClick={nextStep} 
          size="lg" 
          className="btn-hover-effect px-8"
        >
          Comenzar ahora
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Puedes guardar tu progreso en cualquier momento y retomarlo más tarde.
        </p>
      </div>
    </div>
  );
};

export default InfoModal; 