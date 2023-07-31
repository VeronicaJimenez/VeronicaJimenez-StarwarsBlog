const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			vehicles: [],
			favorites: [],
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadDataPeople: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(data => data.json())
				.then(result => getActions().addFavoritesInit(result))
				.then(result => setStore({peoples: result}))
				.catch(error => console.error(error))
			},
			loadDataPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(data => data.json())
				.then(result => getActions().addFavoritesInit(result))
				.then(result => setStore({planets: result}))
				.catch(error => console.error(error))
			},
			loadDataVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(data => data.json())
				.then(result => getActions().addFavoritesInit(result))
				.then(result => setStore({vehicles: result}))
				.catch(error => console.error(error))
			},
			
			loadDataDetail: (url) => {
				fetch(url)
				.then(data => data.json())
				.then(result => result.results)
				.catch(error => console.error(error))
			},

			addFavoritesInit: (data) => {
				return data.results.map(item => {return {...item, "favorite": false}})
			},
			
			editFavorites: (index, label) => {
				let route;
				switch (label) {
					case "peoples":
						route = getStore().peoples;
						break;
					case "planets":
						route = getStore().planets;
						break;
					case "vehicles":
						route = getStore().vehicles;
						break;
				};
				const data = route.map((element, indexArray) => {
					if(indexArray==index){
						element.favorite = !element.favorite;
					}
					return element;
				});			
				
				switch (label) {
					case "peoples":
						setStore({peoples: data});
						break;
					case "planets":
						setStore({planets: data});
						break;
					case "vehicles":
						setStore({vehicles: data});
						break;
				};

				getActions().loadFavorites()
			},

			loadFavorites: () => {
				let finalArray = [];

				for (const key in getStore().peoples) {
					if(getStore().peoples[key].favorite==true){
						finalArray.push({item: getStore().peoples[key], label: "peoples", index: key})
					}
				}

				for (const key in getStore().planets) {
					if(getStore().planets[key].favorite==true){
						finalArray.push({item: getStore().planets[key], label: "planets", index: key})
					}
				}

				for (const key in getStore().vehicles) {
					if(getStore().vehicles[key].favorite==true){
						finalArray.push({item: getStore().vehicles[key], label: "vehicles", index: key})
					}
				}
				
				setStore({favorites: finalArray})
			},
		}
	};
};

export default getState;

