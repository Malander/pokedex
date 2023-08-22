import { PokemonData, PokemonListAPIResponse, SinglePokemonAPIResponse } from '../assets/js/types/types';

export const mockInitialPokemonState: PokemonData[] = [
  {
      "name": "Bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Spearow",
      "url": "https://pokeapi.co/api/v2/pokemon/21/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Fearow",
      "url": "https://pokeapi.co/api/v2/pokemon/22/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Ekans",
      "url": "https://pokeapi.co/api/v2/pokemon/23/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Arbok",
      "url": "https://pokeapi.co/api/v2/pokemon/24/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Pikachu",
      "url": "https://pokeapi.co/api/v2/pokemon/25/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Raichu",
      "url": "https://pokeapi.co/api/v2/pokemon/26/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Sandshrew",
      "url": "https://pokeapi.co/api/v2/pokemon/27/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Sandslash",
      "url": "https://pokeapi.co/api/v2/pokemon/28/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Nidoran-f",
      "url": "https://pokeapi.co/api/v2/pokemon/29/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Nidorina",
      "url": "https://pokeapi.co/api/v2/pokemon/30/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Nidoqueen",
      "url": "https://pokeapi.co/api/v2/pokemon/31/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Nidoran-m",
      "url": "https://pokeapi.co/api/v2/pokemon/32/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Nidorino",
      "url": "https://pokeapi.co/api/v2/pokemon/33/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Nidoking",
      "url": "https://pokeapi.co/api/v2/pokemon/34/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Clefairy",
      "url": "https://pokeapi.co/api/v2/pokemon/35/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Clefable",
      "url": "https://pokeapi.co/api/v2/pokemon/36/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Vulpix",
      "url": "https://pokeapi.co/api/v2/pokemon/37/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Ninetales",
      "url": "https://pokeapi.co/api/v2/pokemon/38/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Jigglypuff",
      "url": "https://pokeapi.co/api/v2/pokemon/39/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Wigglytuff",
      "url": "https://pokeapi.co/api/v2/pokemon/40/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Zubat",
      "url": "https://pokeapi.co/api/v2/pokemon/41/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Golbat",
      "url": "https://pokeapi.co/api/v2/pokemon/42/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Oddish",
      "url": "https://pokeapi.co/api/v2/pokemon/43/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Gloom",
      "url": "https://pokeapi.co/api/v2/pokemon/44/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Vileplume",
      "url": "https://pokeapi.co/api/v2/pokemon/45/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Paras",
      "url": "https://pokeapi.co/api/v2/pokemon/46/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Parasect",
      "url": "https://pokeapi.co/api/v2/pokemon/47/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Venonat",
      "url": "https://pokeapi.co/api/v2/pokemon/48/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Venomoth",
      "url": "https://pokeapi.co/api/v2/pokemon/49/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Diglett",
      "url": "https://pokeapi.co/api/v2/pokemon/50/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Dugtrio",
      "url": "https://pokeapi.co/api/v2/pokemon/51/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Meowth",
      "url": "https://pokeapi.co/api/v2/pokemon/52/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Persian",
      "url": "https://pokeapi.co/api/v2/pokemon/53/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Psyduck",
      "url": "https://pokeapi.co/api/v2/pokemon/54/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Golduck",
      "url": "https://pokeapi.co/api/v2/pokemon/55/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Mankey",
      "url": "https://pokeapi.co/api/v2/pokemon/56/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Primeape",
      "url": "https://pokeapi.co/api/v2/pokemon/57/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Growlithe",
      "url": "https://pokeapi.co/api/v2/pokemon/58/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Arcanine",
      "url": "https://pokeapi.co/api/v2/pokemon/59/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Poliwag",
      "url": "https://pokeapi.co/api/v2/pokemon/60/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Poliwhirl",
      "url": "https://pokeapi.co/api/v2/pokemon/61/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Poliwrath",
      "url": "https://pokeapi.co/api/v2/pokemon/62/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Abra",
      "url": "https://pokeapi.co/api/v2/pokemon/63/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Kadabra",
      "url": "https://pokeapi.co/api/v2/pokemon/64/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Alakazam",
      "url": "https://pokeapi.co/api/v2/pokemon/65/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Machop",
      "url": "https://pokeapi.co/api/v2/pokemon/66/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Machoke",
      "url": "https://pokeapi.co/api/v2/pokemon/67/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Machamp",
      "url": "https://pokeapi.co/api/v2/pokemon/68/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Bellsprout",
      "url": "https://pokeapi.co/api/v2/pokemon/69/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Weepinbell",
      "url": "https://pokeapi.co/api/v2/pokemon/70/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Victreebel",
      "url": "https://pokeapi.co/api/v2/pokemon/71/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Tentacool",
      "url": "https://pokeapi.co/api/v2/pokemon/72/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Tentacruel",
      "url": "https://pokeapi.co/api/v2/pokemon/73/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Geodude",
      "url": "https://pokeapi.co/api/v2/pokemon/74/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Graveler",
      "url": "https://pokeapi.co/api/v2/pokemon/75/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Golem",
      "url": "https://pokeapi.co/api/v2/pokemon/76/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Ponyta",
      "url": "https://pokeapi.co/api/v2/pokemon/77/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Rapidash",
      "url": "https://pokeapi.co/api/v2/pokemon/78/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Slowpoke",
      "url": "https://pokeapi.co/api/v2/pokemon/79/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Slowbro",
      "url": "https://pokeapi.co/api/v2/pokemon/80/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Magnemite",
      "url": "https://pokeapi.co/api/v2/pokemon/81/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Magneton",
      "url": "https://pokeapi.co/api/v2/pokemon/82/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Farfetchd",
      "url": "https://pokeapi.co/api/v2/pokemon/83/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Doduo",
      "url": "https://pokeapi.co/api/v2/pokemon/84/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Dodrio",
      "url": "https://pokeapi.co/api/v2/pokemon/85/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Seel",
      "url": "https://pokeapi.co/api/v2/pokemon/86/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Dewgong",
      "url": "https://pokeapi.co/api/v2/pokemon/87/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Grimer",
      "url": "https://pokeapi.co/api/v2/pokemon/88/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Muk",
      "url": "https://pokeapi.co/api/v2/pokemon/89/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Shellder",
      "url": "https://pokeapi.co/api/v2/pokemon/90/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Cloyster",
      "url": "https://pokeapi.co/api/v2/pokemon/91/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Gastly",
      "url": "https://pokeapi.co/api/v2/pokemon/92/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Haunter",
      "url": "https://pokeapi.co/api/v2/pokemon/93/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Gengar",
      "url": "https://pokeapi.co/api/v2/pokemon/94/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Onix",
      "url": "https://pokeapi.co/api/v2/pokemon/95/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Drowzee",
      "url": "https://pokeapi.co/api/v2/pokemon/96/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Hypno",
      "url": "https://pokeapi.co/api/v2/pokemon/97/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Krabby",
      "url": "https://pokeapi.co/api/v2/pokemon/98/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Kingler",
      "url": "https://pokeapi.co/api/v2/pokemon/99/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  },
  {
      "name": "Voltorb",
      "url": "https://pokeapi.co/api/v2/pokemon/100/",
      "id": null,
      "idString": null,
      "image": null,
      "stats": null,
      "order": null,
      "types": null
  }
]

export const mockPokemonListApiResponse: PokemonListAPIResponse = {
  'count': 1281,
  'next': 'https://pokeapi.co/api/v2/pokemon?offset=100&limit=100',
  'previous': null,
  'results': [
    {
      'name': 'bulbasaur',
      'url': 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      'name': 'ivysaur',
      'url': 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      'name': 'venusaur',
      'url': 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      'name': 'charmander',
      'url': 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      'name': 'charmeleon',
      'url': 'https://pokeapi.co/api/v2/pokemon/5/',
    },
    {
      'name': 'charizard',
      'url': 'https://pokeapi.co/api/v2/pokemon/6/',
    },
    {
      'name': 'squirtle',
      'url': 'https://pokeapi.co/api/v2/pokemon/7/',
    },
    {
      'name': 'wartortle',
      'url': 'https://pokeapi.co/api/v2/pokemon/8/',
    },
    {
      'name': 'blastoise',
      'url': 'https://pokeapi.co/api/v2/pokemon/9/',
    },
    {
      'name': 'caterpie',
      'url': 'https://pokeapi.co/api/v2/pokemon/10/',
    },
    {
      'name': 'metapod',
      'url': 'https://pokeapi.co/api/v2/pokemon/11/',
    },
    {
      'name': 'butterfree',
      'url': 'https://pokeapi.co/api/v2/pokemon/12/',
    },
    {
      'name': 'weedle',
      'url': 'https://pokeapi.co/api/v2/pokemon/13/',
    },
    {
      'name': 'kakuna',
      'url': 'https://pokeapi.co/api/v2/pokemon/14/',
    },
    {
      'name': 'beedrill',
      'url': 'https://pokeapi.co/api/v2/pokemon/15/',
    },
    {
      'name': 'pidgey',
      'url': 'https://pokeapi.co/api/v2/pokemon/16/',
    },
    {
      'name': 'pidgeotto',
      'url': 'https://pokeapi.co/api/v2/pokemon/17/',
    },
    {
      'name': 'pidgeot',
      'url': 'https://pokeapi.co/api/v2/pokemon/18/',
    },
    {
      'name': 'rattata',
      'url': 'https://pokeapi.co/api/v2/pokemon/19/',
    },
    {
      'name': 'raticate',
      'url': 'https://pokeapi.co/api/v2/pokemon/20/',
    },
    {
      'name': 'spearow',
      'url': 'https://pokeapi.co/api/v2/pokemon/21/',
    },
    {
      'name': 'fearow',
      'url': 'https://pokeapi.co/api/v2/pokemon/22/',
    },
    {
      'name': 'ekans',
      'url': 'https://pokeapi.co/api/v2/pokemon/23/',
    },
    {
      'name': 'arbok',
      'url': 'https://pokeapi.co/api/v2/pokemon/24/',
    },
    {
      'name': 'pikachu',
      'url': 'https://pokeapi.co/api/v2/pokemon/25/',
    },
    {
      'name': 'raichu',
      'url': 'https://pokeapi.co/api/v2/pokemon/26/',
    },
    {
      'name': 'sandshrew',
      'url': 'https://pokeapi.co/api/v2/pokemon/27/',
    },
    {
      'name': 'sandslash',
      'url': 'https://pokeapi.co/api/v2/pokemon/28/',
    },
    {
      'name': 'nidoran-f',
      'url': 'https://pokeapi.co/api/v2/pokemon/29/',
    },
    {
      'name': 'nidorina',
      'url': 'https://pokeapi.co/api/v2/pokemon/30/',
    },
    {
      'name': 'nidoqueen',
      'url': 'https://pokeapi.co/api/v2/pokemon/31/',
    },
    {
      'name': 'nidoran-m',
      'url': 'https://pokeapi.co/api/v2/pokemon/32/',
    },
    {
      'name': 'nidorino',
      'url': 'https://pokeapi.co/api/v2/pokemon/33/',
    },
    {
      'name': 'nidoking',
      'url': 'https://pokeapi.co/api/v2/pokemon/34/',
    },
    {
      'name': 'clefairy',
      'url': 'https://pokeapi.co/api/v2/pokemon/35/',
    },
    {
      'name': 'clefable',
      'url': 'https://pokeapi.co/api/v2/pokemon/36/',
    },
    {
      'name': 'vulpix',
      'url': 'https://pokeapi.co/api/v2/pokemon/37/',
    },
    {
      'name': 'ninetales',
      'url': 'https://pokeapi.co/api/v2/pokemon/38/',
    },
    {
      'name': 'jigglypuff',
      'url': 'https://pokeapi.co/api/v2/pokemon/39/',
    },
    {
      'name': 'wigglytuff',
      'url': 'https://pokeapi.co/api/v2/pokemon/40/',
    },
    {
      'name': 'zubat',
      'url': 'https://pokeapi.co/api/v2/pokemon/41/',
    },
    {
      'name': 'golbat',
      'url': 'https://pokeapi.co/api/v2/pokemon/42/',
    },
    {
      'name': 'oddish',
      'url': 'https://pokeapi.co/api/v2/pokemon/43/',
    },
    {
      'name': 'gloom',
      'url': 'https://pokeapi.co/api/v2/pokemon/44/',
    },
    {
      'name': 'vileplume',
      'url': 'https://pokeapi.co/api/v2/pokemon/45/',
    },
    {
      'name': 'paras',
      'url': 'https://pokeapi.co/api/v2/pokemon/46/',
    },
    {
      'name': 'parasect',
      'url': 'https://pokeapi.co/api/v2/pokemon/47/',
    },
    {
      'name': 'venonat',
      'url': 'https://pokeapi.co/api/v2/pokemon/48/',
    },
    {
      'name': 'venomoth',
      'url': 'https://pokeapi.co/api/v2/pokemon/49/',
    },
    {
      'name': 'diglett',
      'url': 'https://pokeapi.co/api/v2/pokemon/50/',
    },
    {
      'name': 'dugtrio',
      'url': 'https://pokeapi.co/api/v2/pokemon/51/',
    },
    {
      'name': 'meowth',
      'url': 'https://pokeapi.co/api/v2/pokemon/52/',
    },
    {
      'name': 'persian',
      'url': 'https://pokeapi.co/api/v2/pokemon/53/',
    },
    {
      'name': 'psyduck',
      'url': 'https://pokeapi.co/api/v2/pokemon/54/',
    },
    {
      'name': 'golduck',
      'url': 'https://pokeapi.co/api/v2/pokemon/55/',
    },
    {
      'name': 'mankey',
      'url': 'https://pokeapi.co/api/v2/pokemon/56/',
    },
    {
      'name': 'primeape',
      'url': 'https://pokeapi.co/api/v2/pokemon/57/',
    },
    {
      'name': 'growlithe',
      'url': 'https://pokeapi.co/api/v2/pokemon/58/',
    },
    {
      'name': 'arcanine',
      'url': 'https://pokeapi.co/api/v2/pokemon/59/',
    },
    {
      'name': 'poliwag',
      'url': 'https://pokeapi.co/api/v2/pokemon/60/',
    },
    {
      'name': 'poliwhirl',
      'url': 'https://pokeapi.co/api/v2/pokemon/61/',
    },
    {
      'name': 'poliwrath',
      'url': 'https://pokeapi.co/api/v2/pokemon/62/',
    },
    {
      'name': 'abra',
      'url': 'https://pokeapi.co/api/v2/pokemon/63/',
    },
    {
      'name': 'kadabra',
      'url': 'https://pokeapi.co/api/v2/pokemon/64/',
    },
    {
      'name': 'alakazam',
      'url': 'https://pokeapi.co/api/v2/pokemon/65/',
    },
    {
      'name': 'machop',
      'url': 'https://pokeapi.co/api/v2/pokemon/66/',
    },
    {
      'name': 'machoke',
      'url': 'https://pokeapi.co/api/v2/pokemon/67/',
    },
    {
      'name': 'machamp',
      'url': 'https://pokeapi.co/api/v2/pokemon/68/',
    },
    {
      'name': 'bellsprout',
      'url': 'https://pokeapi.co/api/v2/pokemon/69/',
    },
    {
      'name': 'weepinbell',
      'url': 'https://pokeapi.co/api/v2/pokemon/70/',
    },
    {
      'name': 'victreebel',
      'url': 'https://pokeapi.co/api/v2/pokemon/71/',
    },
    {
      'name': 'tentacool',
      'url': 'https://pokeapi.co/api/v2/pokemon/72/',
    },
    {
      'name': 'tentacruel',
      'url': 'https://pokeapi.co/api/v2/pokemon/73/',
    },
    {
      'name': 'geodude',
      'url': 'https://pokeapi.co/api/v2/pokemon/74/',
    },
    {
      'name': 'graveler',
      'url': 'https://pokeapi.co/api/v2/pokemon/75/',
    },
    {
      'name': 'golem',
      'url': 'https://pokeapi.co/api/v2/pokemon/76/',
    },
    {
      'name': 'ponyta',
      'url': 'https://pokeapi.co/api/v2/pokemon/77/',
    },
    {
      'name': 'rapidash',
      'url': 'https://pokeapi.co/api/v2/pokemon/78/',
    },
    {
      'name': 'slowpoke',
      'url': 'https://pokeapi.co/api/v2/pokemon/79/',
    },
    {
      'name': 'slowbro',
      'url': 'https://pokeapi.co/api/v2/pokemon/80/',
    },
    {
      'name': 'magnemite',
      'url': 'https://pokeapi.co/api/v2/pokemon/81/',
    },
    {
      'name': 'magneton',
      'url': 'https://pokeapi.co/api/v2/pokemon/82/',
    },
    {
      'name': 'farfetchd',
      'url': 'https://pokeapi.co/api/v2/pokemon/83/',
    },
    {
      'name': 'doduo',
      'url': 'https://pokeapi.co/api/v2/pokemon/84/',
    },
    {
      'name': 'dodrio',
      'url': 'https://pokeapi.co/api/v2/pokemon/85/',
    },
    {
      'name': 'seel',
      'url': 'https://pokeapi.co/api/v2/pokemon/86/',
    },
    {
      'name': 'dewgong',
      'url': 'https://pokeapi.co/api/v2/pokemon/87/',
    },
    {
      'name': 'grimer',
      'url': 'https://pokeapi.co/api/v2/pokemon/88/',
    },
    {
      'name': 'muk',
      'url': 'https://pokeapi.co/api/v2/pokemon/89/',
    },
    {
      'name': 'shellder',
      'url': 'https://pokeapi.co/api/v2/pokemon/90/',
    },
    {
      'name': 'cloyster',
      'url': 'https://pokeapi.co/api/v2/pokemon/91/',
    },
    {
      'name': 'gastly',
      'url': 'https://pokeapi.co/api/v2/pokemon/92/',
    },
    {
      'name': 'haunter',
      'url': 'https://pokeapi.co/api/v2/pokemon/93/',
    },
    {
      'name': 'gengar',
      'url': 'https://pokeapi.co/api/v2/pokemon/94/',
    },
    {
      'name': 'onix',
      'url': 'https://pokeapi.co/api/v2/pokemon/95/',
    },
    {
      'name': 'drowzee',
      'url': 'https://pokeapi.co/api/v2/pokemon/96/',
    },
    {
      'name': 'hypno',
      'url': 'https://pokeapi.co/api/v2/pokemon/97/',
    },
    {
      'name': 'krabby',
      'url': 'https://pokeapi.co/api/v2/pokemon/98/',
    },
    {
      'name': 'kingler',
      'url': 'https://pokeapi.co/api/v2/pokemon/99/',
    },
    {
      'name': 'voltorb',
      'url': 'https://pokeapi.co/api/v2/pokemon/100/',
    },
  ],
};

export const mockOriginalSinglePokemonData: PokemonData = {
  name: 'Ivysaur',
  url: 'https://pokeapi.co/api/v2/pokemon/2/',
  id: null,
  idString: null,
  image: null,
  stats: null,
  order: null,
  types: null,
};

export const mockSinglePokemonData: PokemonData = {
  'name': 'Bulbasaur',
  'url': 'https://pokeapi.co/api/v2/pokemon/1/',
  'id': 1,
  'idString': '#0001',
  'image': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  'stats': [
    {
      'base_stat': 45,
      'effort': 0,
      'stat': {
        'name': 'hp',
        'url': 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      'base_stat': 49,
      'effort': 0,
      'stat': {
        'name': 'attack',
        'url': 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      'base_stat': 49,
      'effort': 0,
      'stat': {
        'name': 'defense',
        'url': 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      'base_stat': 65,
      'effort': 1,
      'stat': {
        'name': 'special-attack',
        'url': 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      'base_stat': 65,
      'effort': 0,
      'stat': {
        'name': 'special-defense',
        'url': 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      'base_stat': 45,
      'effort': 0,
      'stat': {
        'name': 'speed',
        'url': 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  'order': 1,
  'types': [
    {
      'slot': 1,
      'type': {
        'name': 'grass',
        'url': 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      'slot': 2,
      'type': {
        'name': 'poison',
        'url': 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
};

export const mockSinglePokemonDataApiResponse: SinglePokemonAPIResponse = {
  'abilities': [],
  'base_experience': 64,
  'forms': [],
  'game_indices': [],
  'height': 7,
  'held_items': [],
  'id': 1,
  'is_default': true,
  'location_area_encounters': 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  'moves': [],
  'name': 'bulbasaur',
  'order': 1,
  'past_types': [],
  'species': {
    'name': 'bulbasaur',
    'url': 'https://pokeapi.co/api/v2/pokemon-species/1/',
  },
  'sprites': {
    'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    'back_female': null,
    'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    'back_shiny_female': null,
    'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    'front_female': null,
    'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    'front_shiny_female': null,
    'other': {
      'dream_world': {
        'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        'front_female': null,
      },
      'home': {
        'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
        'front_female': null,
        'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png',
        'front_shiny_female': null,
      },
      'official-artwork': {
        'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
      },
    },
    'versions': {
      'generation-i': {
        'red-blue': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png',
          'back_gray': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png',
          'back_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/1.png',
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png',
          'front_gray': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png',
          'front_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png',
        },
        'yellow': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png',
          'back_gray': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png',
          'back_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/1.png',
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png',
          'front_gray': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png',
          'front_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/1.png',
        },
      },
      'generation-ii': {
        'crystal': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png',
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png',
          'back_shiny_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/1.png',
          'back_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/1.png',
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png',
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png',
          'front_shiny_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/1.png',
          'front_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png',
        },
        'gold': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png',
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png',
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png',
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png',
          'front_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/1.png',
        },
        'silver': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png',
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png',
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png',
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png',
          'front_transparent': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/1.png',
        },
      },
      'generation-iii': {
        'emerald': {
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png',
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png',
        },
        'firered-leafgreen': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png',
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png',
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png',
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png',
        },
        'ruby-sapphire': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png',
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png',
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png',
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png',
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png',
          'back_female': null,
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png',
          'back_shiny_female': null,
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png',
          'front_female': null,
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png',
          'front_shiny_female': null,
        },
        'heartgold-soulsilver': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png',
          'back_female': null,
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png',
          'back_shiny_female': null,
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png',
          'front_female': null,
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png',
          'front_shiny_female': null,
        },
        'platinum': {
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png',
          'back_female': null,
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png',
          'back_shiny_female': null,
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png',
          'front_female': null,
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png',
          'front_shiny_female': null,
        },
      },
      'generation-v': {
        'black-white': {
          'animated': {
            'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif',
            'back_female': null,
            'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif',
            'back_shiny_female': null,
            'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
            'front_female': null,
            'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif',
            'front_shiny_female': null,
          },
          'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png',
          'back_female': null,
          'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png',
          'back_shiny_female': null,
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png',
          'front_female': null,
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png',
          'front_shiny_female': null,
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png',
          'front_female': null,
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png',
          'front_shiny_female': null,
        },
        'x-y': {
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png',
          'front_female': null,
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png',
          'front_shiny_female': null,
        },
      },
      'generation-vii': {
        'icons': {
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png',
          'front_female': null,
        },
        'ultra-sun-ultra-moon': {
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png',
          'front_female': null,
          'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png',
          'front_shiny_female': null,
        },
      },
      'generation-viii': {
        'icons': {
          'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png',
          'front_female': null,
        },
      },
    },
  },
  'stats': [
    {
      'base_stat': 45,
      'effort': 0,
      'stat': {
        'name': 'hp',
        'url': 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      'base_stat': 49,
      'effort': 0,
      'stat': {
        'name': 'attack',
        'url': 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      'base_stat': 49,
      'effort': 0,
      'stat': {
        'name': 'defense',
        'url': 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      'base_stat': 65,
      'effort': 1,
      'stat': {
        'name': 'special-attack',
        'url': 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      'base_stat': 65,
      'effort': 0,
      'stat': {
        'name': 'special-defense',
        'url': 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      'base_stat': 45,
      'effort': 0,
      'stat': {
        'name': 'speed',
        'url': 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  'types': [
    {
      'slot': 1,
      'type': {
        'name': 'grass',
        'url': 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      'slot': 2,
      'type': {
        'name': 'poison',
        'url': 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
  'weight': 69,
};

class MockDOMRect {
  x = 0;

  y = 0;

  width = 100;

  height = 100;

  top = 0;

  right = 100;

  bottom = 100;

  left = 0;

  toJSON() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left,
    };
  }
}

export function createMockIntersectionObserverEntry(overrides?: Partial<IntersectionObserverEntry>): IntersectionObserverEntry {
  return {
    target: document.createElement('div'),
    isIntersecting: true,
    intersectionRatio: 1.0,
    boundingClientRect: new MockDOMRect(),
    intersectionRect: new MockDOMRect(),
    rootBounds: new MockDOMRect(),
    time: Date.now(),
    ...overrides,
  };
}