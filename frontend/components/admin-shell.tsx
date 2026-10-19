"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Box, Building2, ChevronDown, ChevronLeft, ChevronRight, CircleDollarSign, ClipboardList, CreditCard, FileBarChart, HelpCircle, LayoutDashboard, MapPin, Menu, Package, Settings, ShieldCheck, ShoppingBag, Truck, Users, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

const navigation = [
  ["Overview", "/dashboard", LayoutDashboard], ["Live orders", "/live-orders", ClipboardList], ["Orders ledger", "/orders", ClipboardList], ["Products", "/products", Package], ["Categories", "/categories", Box], ["Stock & restocks", "/restocks", ShoppingBag], ["Customers", "/customers", Users], ["Riders & delivery", "/riders", Truck], ["Pickup locations", "/pickup-locations", MapPin], ["Transactions", "/transactions", CircleDollarSign], ["Refunds & disputes", "/refunds", CreditCard], ["Sales reports", "/reports", FileBarChart], ["Team & roles", "/team", ShieldCheck], ["Payment settings", "/payments", Settings],
] as const;

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname(); const [open, setOpen] = useState(false); const current = navigation.find(([, href]) => href === pathname)?.[0] ?? "Overview";
  return <main className="workspace"><aside className={`sidebar ${open ? "open" : ""}`}><div className="brand"><img className="brand-mark" src="/premier-fabrics-logo.svg" alt="Premier Fabrics logo" /><span>Premier<br />fabrics</span></div><div className="store-switch"><Building2 size={16} /><span>Premier Fabrics Atelier</span><ChevronDown size={15} /></div><nav>{navigation.map(([label, href, Icon]) => <Link href={href} key={href} className={pathname === href ? "nav-item active" : "nav-item"} onClick={() => setOpen(false)}><Icon size={17} /><span>{label}</span>{label === "Live orders" && <b>12</b>}</Link>)}</nav><div className="sidebar-foot"><Link href="/login" className="nav-item"><HelpCircle size={17} /><span>Support</span></Link><div className="profile"><span className="avatar">DN</span><div><strong>Diana N.</strong><small>Super admin</small></div><button className="icon-button" aria-label="Account options"><ChevronDown size={15} /></button></div></div></aside><section className="content-shell"><header className="topbar"><button className="mobile-menu icon-button" aria-label="Open navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button><div className="crumb"><span>Premier Fabrics</span><ChevronRight size={14} /><strong>{current}</strong></div><div className="top-actions"><button className="icon-button" aria-label="Notifications"><Bell size={18} /><i /></button><button className="date-button"><ChevronLeft size={15} /> Sep 18 - Sep 24, 2026 <ChevronRight size={15} /></button></div></header>{children}</section></main>;
}
