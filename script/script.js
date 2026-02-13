function generateContent(type) {
    const idea = document.getElementById("ideaInput").value;
    const resultDiv = document.getElementById("result");

    if (idea.trim() === "") {
        resultDiv.innerHTML = "Please enter a movie idea first!";
        return;
    }

    let output = "";

    if (type === "screenplay") {
        output = `🎬 SCREENPLAY DRAFT

Title: Untitled Project

Opening Scene:
${idea}

FADE IN:
A dramatic opening sequence introduces the central conflict...
(Dialogue and scenes would be generated here.)`;
    }

    else if (type === "characters") {
        output = `👥 CHARACTER PROFILES

Main Character:
- Name: TBD
- Role: Protagonist
- Background: Inspired by the idea "${idea}"
- Motivation: Overcome the main challenge.

Antagonist:
- Opposes the protagonist.
- Creates tension and conflict.`;
    }

    else if (type === "production") {
        output = `📅 PRODUCTION PLAN

Phase 1: Pre-Production
- Script development
- Casting
- Location scouting

Phase 2: Production
- Shooting schedule
- Equipment setup

Phase 3: Post-Production
- Editing
- Sound design
- Marketing

Based on idea: "${idea}"`;
    }

    resultDiv.innerHTML = output;
}
