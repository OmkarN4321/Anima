const URL = "https://gogoanimehd.io/";
const SEARCH = "https://gogoanimehd.io/search.html?keyword";

const options = {
	headers: {
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
		Referer: "https://www.gogoplay1.com/",
		mode: "cors"
	}
};

const formatTitle = (title, episode) => {
	const formattedTitle = `${title
		.replace(/\b \b|\b\W \b/g, "-")
		.replace(/\W$/g, "")
		.toLowerCase()}-episode-${episode}`;

	return formattedTitle;
};

const getLink = async (title) => {
	let res = await fetch(`${URL}/${title}`, options);
	res = await res.text();

	let snip = res.slice(res.indexOf("streamwish"), res.indexOf("doodstream"));
	snip = snip.slice(snip.indexOf("https"), snip.indexOf("<i")).trim().slice(0, -2);

	if (snip) {
		return snip;
	} else {
		return null;
	}
};

export const getVideoLink = async (link) => {
	try {
		let res = await fetch(link, options);
		res = await res.text();
		res = res.match(/(?<=\[\{file:\s').*(?=',label)/g)[0];

		return res;
	} catch (error) {
		return null;
	}
};

export const magic = async (title, episode) => {
	try {
		const formattedTitle = formatTitle(title, episode);
		let link = await getLink(formattedTitle);

		if (!link) {
			let res = await fetch(`${SEARCH}=${title.replace(/(?<=(\w*\W){3}).*|(?<=(\w*\W\W){3}).*/g, "")}`, options);
			res = await res.text();

			let formattedTitle = res.match(/(?<=\<p\sclass\="name"\>).*(?=\<\/p\>)/g)[0];
			formattedTitle = `${formattedTitle.match(/(?<=category\/).*(?="\s)/g)}-episode-${episode}`;
			link = await getLink(formattedTitle);
		}

		return link;
	} catch (error) {
		return null;
	}
};
