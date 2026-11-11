# 5-day US email course (Brevo)

1. Create a Brevo automation: trigger "Contact added to list" → 5 emails with 1-day delays.
2. List: `EN weekly digest` (or a separate `US course` list).
3. Paste each `day-N.md` body into a Brevo template; subject/preheader are in the file.
4. Use `{{ contact.FIRSTNAME | default: "there" }}` for personalization.
5. Add the automation to the form landing: `us-course.html` (source = `us-course`).

Compliance: single opt-in on the form is fine for the course, but double opt-in is recommended; every email must contain an unsubscribe link (Brevo adds it automatically).
