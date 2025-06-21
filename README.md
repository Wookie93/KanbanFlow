# KanbanFlow - Project Management Kanban Board
A modern project management application with a Kanban board, built within a monorepo architecture to demonstrate advanced development practices.

---

## About The Project

The goal of this project is to create a fully functional Kanban board that not only offers a practical tool for task management but also serves as a showcase of skills in building and maintaining scalable applications within a monorepo architecture. The project places a strong emphasis on code quality, high test coverage, and a modern tech stack.

### Key Features (MVP)

#### Project Management
-   [ ] Create, edit, and delete projects.
-   [ ] Archive completed projects.
-   [ ] Project browser with search functionality.

#### Kanban Board
-   [ ] Customizable columns (e.g., "To Do," "In Progress," "Done").
-   [ ] Drag-and-drop tasks between columns.
-   [ ] WIP (Work In Progress) limit per column.
-   [ ] Task cards with a title, description (Markdown support), assignees, due date, and labels.

#### Authentication & Roles
-   [ ] Login with Google / GitHub.
-   [ ] User account management.
-   [ ] Project roles: Owner, Member, Guest.

#### Collaboration
-   [ ] Add comments to tasks.
-   [ ] Basic notification system (e.g., for task assignments).

---

## Tech Stack

* **Framework:** Next.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Components:** Shoelace (wrapped in a `ui` package)
* **Backend & Database:** Supabase (Auth, Postgres, Realtime)
* **E2E Testing:** Playwright
* **Unit Testing:** Jest / React Testing Library
* **Monorepo Management:** Turborepo
* **Hosting:** Vercel

---

## Project Structure

This project is organized as a monorepo using `Turborepo`.

-   `apps/`: Contains individual applications.
    -   `web`: The main Next.js application with the user interface.
    -   `docs`: A place for future project documentation.
-   `packages/`: Contains shared code and configurations.
    -   `ui`: A shared UI component library.
    -   `eslint-config-custom`: Shared ESLint configuration.
    -   `tsconfig`: Shared TypeScript configuration.
    -   `lib`: Shared business logic, types, and API clients.

---

## Roadmap

-   [ ] Achieve >90% unit test coverage.
-   [ ] Enhance the notification system.
-   [ ] Integrate an AI agent to assist with processes (e.g., code review, sub-task generation).
-   [ ] Add a second application to the monorepo (e.g., a mobile app in React Native).

---
