export type Post = {
	attributes: {
		title?: string;
		permalink?: string;
		date?: string;
		categories?: string[];
	};
	body: string;
};

export type RawPost = {
	attributes: {
		title?: string;
		permalink?: string;
		date?: string;
		categories?: string[];
	};
	rawBody: string;
};
