<script>

    const cards = {
    "Democrats": ["Party", "Blue", "Election", "Senate", "President"],
    "Liberal": ["Left", "Politics", "Progressive", "Democrat", "Activist"],
    "Progressive": ["Left", "Liberal", "Policy", "Activist", "Change"],
    "Communist": ["Revolution", "Red", "Marx", "Dictatorship", "Cuba"],
    "Centrist": ["Moderate", "In-between", "Nonpartisan", "Neutral", "Compromise"],
    "Socialist": ["Left", "Redistribution", "Revolution", "Marxism", "Worker"],
    "Medicare for All": ["Healthcare", "Single-payer", "Universal", "Insurance", "Coverage"],
    "Open Borders": ["Immigration", "Policy", "Undocumented", "Asylum", "Refugee"],
    "Gun Control": ["Regulation", "Firearms", "Second Amendment", "Background check", "NRA"],
    "LGBTQ+ rights": ["Equality", "Marriage", "Discrimination", "Community", "Rainbow"],
    "Black Lives Matter": ["Movement", "Police", "Protest", "Racism", "Cops"],
    "Social Justice": ["Equality", "Fairness", "Activism", "Equity", "Warriror"],
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
    "Bernie Sanders": ["Senator", "Vermont", "Election", "Democratic Socialist", "Activist"],
    "Doug Jones": ["Senator", "Alabama", "Election", "Democrat", "Lawyer"],
    "Billionaire": ["Wealthy", "Money", "Rich", "Millionaire", "Affluent"],
    "Elon Musk": ["Tesla", "SpaceX", "Innovator", "Twitter", "South Africa"],
    "Supreme Court": ["Judiciary", "Nine", "Justices", "Law", "Constitution"],
    "Clarence Thomas": ["Justice", "Supreme Court", "Conservative", "Confirmation", "Law"],
    "Donald Trump": ["President", "Republican", "Election", "Impeachment", "Businessman"],
    "Mitch McConnell": ["Senate", "Majority Leader", "Kentucky", "Election", "Conservative"],
    "Election Map": ["Results", "States", "Red", "Blue", "Winners"],
    "Electoral College": ["Votes", "Presidential", "Election", "Winner-takes-all", "State-by-state"],
    "Mike Pence": ["Vice President", "Indiana", "Election", "Governor", "Conservative"],
    "Legalizing Marijuana": ["Weed", "Cannabis", "Decriminalization", "Drug", "Medicinal"],
    "Clean Needle Program": ["Drug", "Injection", "Harm reduction", "Public health", "Needle exchange"],
    "Ben Shapiro": ["Conservative", "Podcast", "Commentator", "Author", "Daily Wire"],
    "Charlie Kirk": ["Turning Point USA", "Conservative", "Face", "Author", "Fascist"],
    "Turning Point USA": ["Conservative", "Campus", "Organization", "Toilet Paper", "Campus"],
    "Democratic Socialists of America": ["Socialism", "Progressive", "Organization", "Political", "Left-wing"],
    "Libertarian Party": ["Political", "Third-party", "Liberty", "Small government", "Free market"],
    "Green Party": ["Political", "Third-party", "Environment", "Progressive", "Left-wing"],
    "Marianne Williamson": ["Author", "Spirituality", "Progressive", "Crystal", "2020 candidate"],
    "Elizabeth Warren": ["Senator", "Massachusetts", "Progressive", "Democrat", "Consumer protection"],
    "Ted Cruz": ["Senator", "Texas", "Conservative", "Republican", "2020 Candidate"],
    "Ron DeSantis": ["Governor", "Florida", "Republican", "Conservative", "2024 candidate"],
    "Mo Brooks": ["Representative", "Alabama", "Conservative", "Republican", "Election"],
    "Andrew Tate": ["Kickboxing", "Podcast", "Misogynistic", "British", "Jail"],
    "Alabama Democratic Party": ["Political", "Party", "Useless", "Alabama", "Election"],
    "France": ["Country", "Europe", "Paris", "Eiffel Tower", "Baguette"],
    "NATO": ["Military", "Alliance", "North Atlantic", "Europe", "USA"],
    "Russia": ["Country", "Moscow", "Putin", "Cold War", "Soviet Union"],
    "Ukraine": ["Country", "Kiev", "Russia", "Crimea", "Maidan"],
    "Seed Oils": ["Canola", "Soybean", "Vegetable", "Cooking", "Omega-3"]
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