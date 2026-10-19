"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function usePageModal() { const [open, setOpen] = useState(false); return { open, show: () => setOpen(true), close: () => setOpen(false) }; }

export function PageModal({ open, close, title, fields }: { open: boolean; close: () => void; title: string; fields: string[] }) {
  if (!open) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={close}><section className="modal" role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}><div className="modal-head"><div><p className="eyebrow">Premier fabrics</p><h2>{title}</h2></div><button className="icon-button" aria-label="Close popup" onClick={close}><X size={18} /></button></div><p className="modal-note">Complete the details below and save when you are ready.</p><form className="form-grid" onSubmit={(event) => { event.preventDefault(); close(); }}>{fields.map((field, index) => <label key={field} className={fields.length > 2 && index === fields.length - 1 ? "span-two" : ""}>{field}<input required placeholder={`Enter ${field.toLowerCase()}`} /></label>)}<div className="modal-actions"><button type="button" className="secondary" onClick={close}>Cancel</button><button className="primary">Save changes</button></div></form></section></div>;
}
