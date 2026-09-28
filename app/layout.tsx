import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Inquiry — A starting point for something meaningful",description:"Learn to turn your curiosity into rigorous research. Guided mentorship, daily tasks, and free resources for student researchers.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
