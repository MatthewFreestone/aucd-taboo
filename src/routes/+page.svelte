<script>
  import { debug } from "svelte/internal";

    const cards = {
    "Democrats": ["Party", "Blue", "Election", "Senate", "President"],
    "Liberal": ["Left", "Politics", "Progressive", "Democrat", "Activist"],
    "Progressive": ["Left", "Liberal", "Policy", "Activist", "Change"],
    "Communist": ["Revolution", "Red", "Karl Marx", "Dictatorship", "Cuba"],
    "Centrist": ["Moderate", "In-between", "Nonpartisan", "Neutral", "Compromise"],
    "Socialist": ["Left", "Redistribution", "Revolution", "Marxism", "Worker"],
    "Medicare for All": ["Healthcare", "Single-payer", "Universal", "Insurance", "Coverage"],
    "Open Borders": ["Immigration", "Policy", "Undocumented", "Asylum", "Refugee"],
    "Gun Control": ["Regulation", "Firearms", "Second Amendment", "Background check", "NRA"],
    "LGBTQ+ rights": ["Equality", "Marriage", "Discrimination", "Community", "Rainbow"],
    "Black Lives Matter": ["Movement", "Police", "Protest", "Racism", "Injustice"],
    "Social Justice": ["Equality", "Fairness", "Activism", "Change", "Rights"],
    "Income Inequality": ["Wealth Gap", "Poverty", "Rich", "Distribution", "Class"],
    "Minimum Wage": ["Labor", "Pay", "Lowest", "Hourly", "Worker"],
    "Student Loan Forgiveness": ["Debt", "Education", "College", "Relief", "Financial"],
    "Climate Change": ["Global warming", "Environment", "Greenhouse gases", "Carbon", "Pollution"],
    "Renewable Energy": ["Green", "Sustainable", "Solar", "Wind", "Clean"],
    "Infrastructure": ["Bridges", "Roads", "Transportation", "Utilities", "Construction"],
    "Trains": ["Railways", "Transportation", "Tracks", "Engine", "Cargo"],
    "Trillion-Dollar Coin": ["Mint", "Debt", "Inflation", "Economy", "Currency"],
    "Critical Race Theory": ["Education", "Curriculum", "Racism", "Systemic", "Scholarship"],
    "Kamala Harris": ["Vice President", "California", "Election", "Senator", "Lawyer"],
    "Joe Biden": ["President", "Election", "Delaware", "Senator", "Obama"],
    "Nancy Pelosi": ["Speaker", "House", "Congress", "California", "Election"],
    "Chuck Schumer": ["Senate", "Majority", "New York", "Election", "Congress"],
    "Alexandria Ocasio-Cortez": ["Congress", "New York", "Election", "Activist", "Progressive"],
    "Elizabeth Warren": ["Senator", "Massachusetts", "Election", "Activist", "Consumer"],
    "Bernie Sanders": ["Senator", "Vermont", "Election", "Democratic Socialist", "Activist"]
    }
    const keys = Object.keys(cards)
    let card_order = []
    
    const getNewKey = () => {
        if (card_order.length === keys.length){
            alert("You've gone through all the cards!")
            card_order = []
        }
        let newKey = keys[Math.floor(Math.random() * keys.length)]
        while (card_order.includes(newKey)) {
            newKey = keys[Math.floor(Math.random() * keys.length)]
        }
        card_order.push(newKey)
        console.log(card_order)
        return newKey
    }
    const goBackKey = () => {
        if (card_order.length <= 1){
            alert("You haven't gone through any cards yet!")
            return card_order[card_order.length - 1]
        }
        card_order.pop()
        return card_order[card_order.length - 1]
    }

    let currentKey = getNewKey()
</script>


<div class="mt-10 m-5 max-h-3/4 w-3/4 border-2 border-blue-900 rounded-md overflow-hidden">
    <div class="flex flex-col gap-2 items-center mx-auto">
        <div class="border-b-2 border-blue-900 bg-blue-800 text-white px-2 py-1 w-full h-full">
            <h2 class="text-3xl text-center font-bold break-words">{currentKey}</h2>
        </div>
        {#each cards[currentKey] as card}
            <div class="text-center text-2xl">{card}</div>
        {/each}
    </div>
    <button class="bg-white font-bold w-full hover:bg-blue-500 hover:text-white border-t-2 border-blue-900 mt-4 py-1" 
        on:click={() => {currentKey = getNewKey()}}>
        <span class="text-center text-2xl">Next Card</span>
    </button>
</div>
<div class="mt-2 flex flex-row justify-between">
    <div class="border rounded-lg bg-white border-blue-900 p-2">
        <button class="text-lg" on:click={() => {currentKey = goBackKey()}}>
            <span>&larr; Go Back</span>
        </button>
    </div>
</div>