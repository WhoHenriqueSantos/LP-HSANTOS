import React from 'react';

interface IconProps {
  className?: string;
}

export const HsantosFullLogo: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1132 600" className={className}>
        <defs>
            <style>{`.cls-1,.cls-2{fill:#fff;}.cls-3{fill:url(#Gradiente_sem_nome_13);}.cls-5{letter-spacing:-.08em;}.cls-2{font-family:Montserrat-SemiBold, Montserrat, sans-serif;font-size:215.58px;font-variation-settings:'wght' 600;font-weight:600;}.cls-6{letter-spacing:-.07em;}`}</style>
            <linearGradient id="Gradiente_sem_nome_13" x1="387.57" y1="88.73" x2="690.5" y2="516.29" gradientUnits="userSpaceOnUse">
                <stop offset=".3" stopColor="#f76c2f"/>
                <stop offset=".49" stopColor="#f7682f"/>
                <stop offset=".65" stopColor="#f75e2f"/>
                <stop offset=".81" stopColor="#f74c2f"/>
                <stop offset=".84" stopColor="#f7472f"/>
            </linearGradient>
        </defs>
        <text className="cls-2" transform="translate(662.65 448.64)"><tspan className="cls-5" x="0" y="0">T</tspan><tspan className="cls-6" x="113.18" y="0">OS</tspan></text>
        <path className="cls-3" d="M497.03,265.07V89.03c0-24.06-18.94-51.03-51.03-51.03-28.18,0-51.03,22.84-51.03,51.03v268.87c0,3.96.45,7.82,1.31,11.52.09.38.18.76.27,1.13.1.37.21.75.3,1.13,1.31,4.57,3.28,9.05,5.96,13.28,15.05,23.83,46.57,30.93,70.4,15.88l3.72-2.35,100.56-63.55v176.04c0,28.18,22.84,51.03,51.03,51.03s51.03-22.84,51.03-51.03V242.1c0-3.96-.45-7.82-1.31-11.52-.09-.38-.18-.76-.27-1.13l-.3-1.13c-1.31-4.57-3.28-9.05-5.96-13.28-15.05-23.83-46.57-30.93-70.4-15.88l-104.28,65.89Z"/>
        <path className="cls-1" d="M53.5,448.39v-150.91h28.03v150.91h-28.03ZM79.37,383.72v-23.93h82.35v23.93h-82.35ZM159.56,448.39v-150.91h27.81v150.91h-27.81Z"/>
        <path className="cls-1" d="M260.46,450.55c-11.79,0-23.03-1.69-33.74-5.07-10.71-3.38-19.29-7.72-25.76-13.04l9.7-21.77c6.04,4.74,13.51,8.7,22.42,11.86,8.91,3.16,18.03,4.74,27.38,4.74,7.9,0,14.3-.86,19.19-2.59,4.88-1.73,8.48-4.06,10.78-7.01,2.3-2.94,3.45-6.29,3.45-10.03,0-4.6-1.65-8.3-4.96-11.1-3.31-2.8-7.58-5.03-12.83-6.68-5.25-1.65-11.07-3.16-17.46-4.53-6.4-1.36-12.79-3.05-19.19-5.07-6.4-2.01-12.25-4.56-17.57-7.65-5.32-3.09-9.59-7.22-12.83-12.4-3.23-5.17-4.85-11.78-4.85-19.83s2.19-15.7,6.58-22.53c4.38-6.83,11.07-12.29,20.05-16.38,8.98-4.1,20.37-6.14,34.17-6.14,9.05,0,18.03,1.15,26.95,3.45,8.91,2.3,16.67,5.6,23.28,9.92l-8.84,21.77c-6.76-4.02-13.73-7.01-20.91-8.95-7.19-1.94-14.09-2.91-20.7-2.91-7.62,0-13.87.94-18.76,2.8-4.89,1.87-8.45,4.35-10.67,7.44-2.23,3.09-3.34,6.51-3.34,10.24,0,4.6,1.62,8.3,4.85,11.1,3.23,2.8,7.47,4.99,12.72,6.58,5.25,1.58,11.1,3.09,17.57,4.53,6.47,1.44,12.86,3.13,19.19,5.07,6.32,1.94,12.14,4.46,17.46,7.55,5.32,3.09,9.59,7.19,12.83,12.29,3.23,5.1,4.85,11.61,4.85,19.51s-2.19,15.49-6.58,22.31c-4.39,6.83-11.1,12.29-20.16,16.38-9.05,4.1-20.48,6.14-34.28,6.14Z"/>
        <path className="cls-1" d="M313.49,448.39l67.91-150.91h27.59l68.12,150.91h-29.53l-58.21-136.03h11.21l-58.42,136.03h-28.67ZM385.21,413.47l7.76-21.99h40.82l7.55,21.99h-56.13Z"/>
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);

export const WhatsappIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.1-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-1.153.164-.675.164-1.247.114-1.365-.05-.114-.183-.183-.38-.283z"/>
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export const QuoteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-9.609l.02-1.959c-5.232.237-8.026 3.41-8.026 8.391v10.568h-6v-10.568c0-4.981-2.793-8.153-8.026-8.391l.02 1.959c6.252.039 9.983 3.905 9.983 9.609v7.391h-6z"/>
    </svg>
);