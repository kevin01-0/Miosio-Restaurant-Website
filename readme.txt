MIOSIO / MAISON CAFE — NETLIFY STATIC DEPLOY PACKAGE

Deploy:
1. Extract this ZIP.
2. In Netlify, create a new project or open the intended Miosio project.
3. Deploy manually by dragging the CONTENTS of this folder (not the ZIP itself) into the deploy area.
4. Ensure index.html is at the top level.

Important:
- This package converts the Flask/Jinja templates to static HTML so the public pages can render on Netlify.
- The reservation form is demo-only and does not save/send bookings. Connect a booking backend/service before real use.
- Staff login/dashboard/backend are intentionally not included in this static deployment.
