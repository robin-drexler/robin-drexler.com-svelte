export type Post = {
	attributes: {
		title?: string;
		permalink?: string;
		date?: string;
		categories?: string;
	};
	body: string;
};
