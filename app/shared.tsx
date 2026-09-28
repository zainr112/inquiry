import { ArrowUpRight } from "lucide-react";
export function Brand(){return <a className="brand" href="/" aria-label="Inquiry home"><span className="brand-mark" aria-hidden="true"/>inquiry<span style={{color:'#839479'}}>.</span></a>}
export function Header(){return <div className="wrap"><header className="nav"><Brand/><nav className="nav-links"><a className="nav-hide" href="/#approach">Our approach</a><a className="nav-hide" href="/resources">Free resources</a><a href="/portal">Member login</a><a className="btn" href="/apply">Apply for membership <ArrowUpRight size={15}/></a></nav></header></div>}
export function Footer(){return <div className="wrap"><footer className="footer"><Brand/><span>A little curiosity. A meaningful contribution.</span><a href="/mentor">Mentor dashboard</a><span>© {new Date().getFullYear()} Inquiry</span></footer></div>}
export function Shell({children}:{children:React.ReactNode}){return <><Header/><main>{children}</main><Footer/></>}
