function generateStory() {
    const persona = document.getElementById('persona').value;
    const goal = document.getElementById('goal').value;
    const reason = document.getElementById('reason').value;
    const outputDiv = document.getElementById('userStoryOutput');

    if (!persona || !goal || !reason) {
        outputDiv.textContent = 'Please fill out all fields.';
        return;
    }

    const userStory = `As a **${persona}**, I want to **${goal}** so that **${reason}**.`;

    const acceptanceCriteria = `
**Acceptance Criteria:**

* **Scenario 1:** Successful action
    * **Given** I am a **${persona}**
    * **When** I **${goal}**
    * **Then** the system successfully **[outcome]**
* **Scenario 2:** Unsuccessful action
    * **Given** I am a **${persona}**
    * **When** I attempt to **[something that would cause failure]**
    * **Then** the system displays an error message explaining the failure`;

    outputDiv.innerHTML = `
        <p><strong>User Story:</strong></p>
        <p>${userStory}</p>
        <p><strong>Acceptance Criteria:</strong></p>
        <pre>${acceptanceCriteria}</pre>
        <p><em>(Note: Fill in the bracketed sections [ ] with specific details.)</em></p>
    `;
}
