export type ArtPhoto = {
	file: string;
	title?: string;
	text?: string;
};

export type ArtFolder = {
	slug?: string;
	title?: string;
	note?: string;
	cover?: string;
	folders?: ArtFolder[];
	photos?: ArtPhoto[];
};

export const artManifest: ArtFolder = {
	title: 'Art & photos',
	note: 'Doodles, drawings and photos',
	folders: [
		{
			title: 'Colleggtion',
			photos: [
				{ file: 'eggsistential-crisis.jpeg', title: 'Eggsistential Crisis' },
				{ file: 'eggcellent-revovery.jpeg', title: 'Eggcellent Revovery' },
				{ file: 'teggsier.jpeg', title: 'Teggsier' },
				{ file: 'eggscalibur.jpeg', title: 'Eggscalibur' },
				{ file: 'eggplants.jpeg', title: 'Eggplants' },
				{ file: 'eleggtion.jpeg', title: 'Eleggtion' },
				{ file: 'des-yoeufs.jpeg', title: 'Des yoeufs' },
				{ file: 'quebegg.jpeg', title: 'Quebegg' },
				{ file: 'beggle.jpeg', title: 'Beggle' },
				{ file: 'tag-der-deutschen-ei-nheit.jpeg', title: 'Tag der Deutschen Ei-nheit' },
				{ file: 'eggspired-food.jpeg', title: 'Eggspired Food' }
			]
		},
		{
			title: 'Doodles and Drawings',
			photos: [
				{ file: 'silly-goose-on-the-loose.jpeg', title: 'Silly Goose on the loose' },
				{ file: 'poopin.jpeg', title: "Poopin'" },
				{ file: 'pumpkin.jpeg', title: 'Pumpkin' },
				{ file: 'bootine.jpeg', title: 'Boootine 👻' },
				{ file: 'tori-gate.jpg', title: 'Tori Gate' },
				{ file: 'window.jpg', title: 'Window' },
				{ file: 'cereal-killer.JPG', title: 'Cereal Killer' },
				{ file: 'two-birds-one-scone.jpg', title: 'Two Birds One Scone' },
				{ file: 'blue-wave.jpeg', title: 'Blue Wave' },
				{ file: 'hey-listen.jpg', title: 'Hey! Listen!' },
				{ file: 'boop.jpg', title: 'Boop' },
				{ file: 'dryden.jpg', title: 'Dryden (Copy/Homage)' },
				{ file: 'lamp-post.jpg', title: 'Lamp Post' }
			]
		},
		{
			title: 'Misc',
			photos: [{ file: 'faces-of-sky.jpg', title: 'Faces of Sky' }]
		}
	]
};
