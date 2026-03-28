/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   projects.js — single source of truth for all projects

   Edit here → updates BOTH the index list AND
   the metadata inside each project page.

   Fields:
   - slug:   folder name (e.g. "project-partsradet")
   - num:    display number shown in index
   - title:  project title
   - type:   project type shown in index + project page
   - client: client name shown in project page
   - year:   year shown in both
   - href:   link from index (usually slug + /index.html)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var PROJECTS = [
   {
    slug:   'project-postnord',
    title:  'Simplifying a complex logistics experience',
    type:   'Product Design',
    client: 'PostNord',
    year:   '2022–25',
    href:   'project-postnord/index.html',
  },
   {
    slug:   'project-partsradet',
    title:  'A governmental challenge',
    type:   'Product Design',
    client: 'Partsrådet',
    year:   2024,
    href:   'project-partsradet/index.html',
  },

 
  {
    slug:   'project-autoliv',
    title:  'Defining a safety-driven product',
    type:   'UX Discovery',
    client: 'Autoliv',
    year:   2025,
    href:   'project-autoliv/index.html',
  },
  {
    slug:   'project-07',
    title:  'Elevating travel at sea',
    type:   'UX Discovery',
    client: '',
    year:   2022,
    href:   '#',
  },
  {
    slug:   'project-leadership',
    title:  'On being Manager & Team lead',
    type:   'Leadership',
    client: 'Framna',
    year:   2025,
    href:   'project-leadership/index.html',
  },
];
