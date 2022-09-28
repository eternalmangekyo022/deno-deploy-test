import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

serve(
    async() => new Response(JSON.stringify(await (await fetch("https://nycpokemap.com/raids.php")).json()))
)