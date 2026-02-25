const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    category: "Technology",
    date: new Date().getFullYear(),
    author: "Mary Kibunda",
    image: "/assets/Learning.jpg",
    authorImage: "/assets/young-woman.jpg",
    content: `
Next.js gives you a modern, production-ready React setup with strong performance and great defaults.
This guide is a quick, practical on-ramp so you can ship a solid first app without guessing the basics.

Highlights:
- App Router for clean, nested layouts
- File-based routing that is easy to reason about
- Server and Client Components for smarter rendering
- Built-in API routes for lightweight backends

Start by creating a new project and exploring the app directory structure. Each folder maps to a route,
and layout files let you share UI across pages without repeating code. When you fetch data, prefer Server
Components for simplicity and performance, and reach for Client Components only when you need state or effects.

Next.js also handles images, fonts, and metadata with first-class APIs. That saves time and keeps performance
high by default. As your app grows, you can add route handlers for lightweight endpoints or connect to a full
backend when needed.

Key takeaways:
- Use app routing and layouts to keep structure clear
- Default to Server Components and opt into Client Components when necessary
- Lean on built-in tooling for images, metadata, and deployment
    `
  },
  {
    id: 2,
    title: "Understanding APIs in Modern Web Apps",
    category: "Technology",
    date: new Date().getFullYear(),
    author: "John Mwansa",
    image: "/assets/api.jpg",
    authorImage: "/assets/young-man.jpg",
    content: `
APIs are the contracts that let software systems talk to each other. If you build web apps, you already
rely on them for authentication, payments, data, and integrations. This overview covers the essentials
without the jargon.

Highlights:
- An API is a clear interface for requests and responses
- It separates the frontend from backend logic
- It enables third-party integrations and microservices
- Security and consistency matter as much as speed

At a basic level, a client sends a request and the API returns a response. In a web app, the browser calls
an endpoint, the server validates and processes the request, and the API returns JSON data the UI can render.
This separation keeps systems modular and easier to maintain.

Most teams start with REST because it is simple and widely supported. GraphQL is useful when clients need
precise control over the data they receive. Regardless of style, focus on clear endpoints, strong error
handling, and consistent response formats. Add authentication, input validation, rate limiting, and HTTPS
to protect data and reliability.

Key takeaways:
- Treat APIs as contracts that must be stable and well-documented
- Pick REST or GraphQL based on product needs, not trends
- Build security and observability in from day one
    `
  },
  {
    id: 3,
    title: "UI Design Tips for Developers",
    category: "Technology",
    date: new Date().getFullYear(),
    author: "Alice Banda",
    image: "/assets/uiux.jpg",
    authorImage: "/assets/woman1.jpg",
    content: `
Strong UI design helps users move through your product with confidence. You do not need to be a designer
to create interfaces that feel intentional and reliable.

Highlights:
- Clear typography and hierarchy
- Consistent spacing and alignment
- Accessible color contrast
- Responsive patterns that scale

Start with a type scale that matches the tone of your product. Use headings to create structure and keep
body text readable with comfortable line height. Next, define spacing rules (such as 4px or 8px increments)
so layouts feel consistent across pages. Consistency reduces cognitive load and makes the UI feel stable.

Accessibility is not optional. Ensure text contrast passes basic guidelines, focus states are visible, and
interactive elements are large enough for touch. Finally, design mobile-first and scale up, so the most
important content stays visible regardless of screen size.

Key takeaways:
- Use a simple type scale and apply it consistently
- Build layouts with a predictable spacing system
- Treat accessibility as a core design requirement
    `
  }, {
    id: 4,
    title: "UI Design Tips for Developers",
    category: "Technology",
    date: new Date().getFullYear(),
    author: "Alice Banda",
    image: "/assets/uiux.jpg",
    authorImage: "/assets/woman.jpg",
    content: `
Great UI is not just decoration; it is the way your product communicates. When the interface is clear,
users feel in control and errors drop.

Highlights:
- Visual hierarchy that guides attention
- Component reuse for consistent behavior
- Feedback for user actions
- Practical testing on real devices

Begin by defining hierarchy: primary actions should be obvious and secondary actions should be quieter.
Then build a small component set (buttons, cards, form fields) and reuse them everywhere. This keeps
behavior predictable and speeds up development.

Do not forget feedback. Loading states, success messages, and error cues keep users informed. Finally,
test on real devices to catch spacing, tap targets, and contrast issues that are easy to miss on desktop.

Key takeaways:
- Use hierarchy to make the next step obvious
- Reuse components to keep UI consistent and fast to build
- Provide clear feedback for every user action
    `
  }

];

export default blogPosts;

