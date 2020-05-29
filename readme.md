**Project Overveiw**

An inventory management tool for the collectable card game magic the gathering. Track your collection, yours wants, build decks and check what decks your inventory can support simultaniously.

The tool works with two major data structures, card objects and deck objects. Crd objects are JSON objects containing the relevant inforamtion on the card such as the type or an image link. Deck objects hold a list of card objects that reperesent the phyisical game pieces that make up the deck as well as some meta information on the deck that is used for display and filter purposes.

**Goals and Motivation**

This strated as a private project. I needed a specific software to fit my personal needs and could not find one. Hence I started building my own. When it came to choosing a tech stack I decided to take this oportunity to deepen my understaning of ES6. I had also wanted to try out the databeses integrated in Chrome. This lead to the project becoming a clinet side only tool. 

I have had positive feedback from several peopel who also engage in this hobby so it may evolve into smething I share. Due to it being designed only with personal use in mind the tool is still lacking in areas such as error handling. This would have to be addressed before I could push to publish it for the MtG-comunity.

**Feature and planed features**

The tool is still WIP. Aside from the needed error handling there are severla features I still want to implement. 

Currently the tool can import data, display lists of card and deck objects, visuallise the content of these deck objects and the feature that I built the tool for it can compare the deck object content to the inventory so that I can quickly determin which permutations of deck objects I can assemble from my current inventory.

Features that I still want to add are filters for all list views and a deck builder that allows the user to generate a deck object via the inventory view from the card objects present in the inventory.

Features I can see having value to some users could be statistics, usage statistics (decks get played so you can generate statistics of what parts of your inventory see what usage over time), import/export the tools db or make a webbased backend, share and compare functions with other users.

**Project timeline**

There is no timeline for this project. I will devote time to it when I have said time to spare. Since it is a project for personal use first and formost I see no need to rush it.