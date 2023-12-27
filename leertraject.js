document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const segmentElement = document.querySelector('.segment');
    const prevBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextBtn');

    const data = [
        {
            "type": "infobit",
            "title": "Amnesie en Episodisch en Semantisch Geheugen",
            "content": "In deze module duiken we in het geheugen, waarbij we beginnen met uitleg over geheugenverlies, inclusief de verhalen over mensen die moeite hebben met het onthouden van nieuwe dingen of het herinneren van het verleden. We bekijken hoe delen van de hersenen zoals de hippocampus en neocortex helpen bij het opslaan van herinneringen en hoe verschillende soorten geheugen, zoals persoonlijke ervaringen en feitenkennis, ons maken tot wie we zijn. Ook bespreken we hoe we informatie verwerken en onthouden, en wat de beste manieren zijn om te leren en te studeren."
        },
        {
            "type": "infobit",
            "title": "Amnesie",
            "content": "Amnesie, of geheugenverlies, kan verschillende vormen aannemen. Het kan invloed hebben op zowel nieuwe herinneringen (anterograde amnesie) als op bestaande herinneringen (retrograde amnesie)."
        },
        {
            "type": "infobit",
            "title": "Retrograde Amnesie",
            "content": "Retrograde amnesie is een vorm van amnesie waarbij mensen moeite hebben om herinneringen op te halen die vóór een specifiek moment, zoals een ongeluk of ziekte, zijn gevormd. Het beïnvloedt voornamelijk het langetermijngeheugen en kan variëren van het verliezen van toegang tot herinneringen uit het recente tot verre verleden. Het vermogen om nieuwe herinneringen te vormen blijft behouden."
        },
        {
            "type": "question",
            "title": "",
            "content": "Wat kenmerkt retrograde amnesie?"
        },
        {
            "type": "infobit",
            "title": "Anterograde Amnesie",
            "content": "Anterograde amnesie is een aandoening waarbij iemand niet in staat is om nieuwe herinneringen te vormen na het optreden van een hersenletsel of -ziekte. Deze vorm van amnesie beïnvloedt het vermogen om nieuwe informatie of ervaringen op te slaan, terwijl eerdere herinneringen vaak intact blijven."
        },
        {
            "type": "question",
            "title": "",
            "content": "Wat kenmerkt anterograde amnesie?"
        },
        {
            "type": "question",
            "title": "",
            "content": "Wat is het verschil tussen retrograde en anterograde amnesie?"
        },
        {
            "type": "infobit",
            "title": "Amnesie Patiënt: Clive Wearing",
            "content": "Clive Wearing heeft een herseninfectie gehad waardoor zijn hippocampus compleet vernietigd is aan beide kanten. Sindsdien kan hij geen langetermijngeheugen meer opbouwen en heeft hij moeite om eerdere herinneringen op te halen. Het werkgeheugen is in tact, maar hij ervaart geen continuiteit met het verleden."
        }
    ];

    function updateSegment() {
    const currentData = data[currentIndex];
    let segmentHTML = `<h2>${currentData.title}</h2><p class="${currentData.type}">${currentData.content}</p>`;

    if (currentData.type === 'question') {
        segmentHTML += `
            <textarea placeholder="Typ hier uw antwoord..."></textarea>
            <button class="submit-btn">Indienen</button>
            <p class="submit-message" style="display:none;"></p>
        `;
    }

    segmentElement.innerHTML = segmentHTML;

    if (currentData.type === 'question') {
        const submitBtn = segmentElement.querySelector('.submit-btn');
        const submitMessage = segmentElement.querySelector('.submit-message');
        submitBtn.addEventListener('click', function() {
            submitMessage.textContent = "Je vraag is opgestuurd naar de LLM voor beoordeling.";
            submitMessage.style.display = 'block';
        });
      }
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSegment();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < data.length - 1) {
            currentIndex++;
            updateSegment();
        }
    });

    updateSegment();
});
