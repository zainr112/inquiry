import {env} from "cloudflare:workers";
export function db(){if(!env.DB)throw new Error("Storage unavailable");return env.DB}
export async function isMentor(id:string){const r=await db().prepare("SELECT value FROM settings WHERE key = ?").bind("mentor").first<{value:string}>();return r?.value===id}
export async function isMember(id:string){return !!await db().prepare("SELECT user_id FROM applications WHERE user_id=? AND status='approved'").bind(id).first()}
