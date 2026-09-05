const params = new URLSearchParams(window.location.search);
const term = params.get("term") || "";
const query = params.get("q") || term || "";
const detailQuery = document.getElementById("detail-query");
const detailDefinition = document.getElementById("detail-definition");
const detailExample = document.getElementById("detail-example");
const detailCard = document.querySelector(".detail-card");
const detailContainer = detailCard?.parentElement;

const encouragementTerm = "࿔яあΩd9;אทꙮｓह한বع";
const isEmptyQuery = params.has("q") && params.get("q") === "";
const isEncouragementTerm = query === encouragementTerm;
const definition = isEmptyQuery
	? `ゾナ語で『虚無』を意味する言葉。対義語：${encouragementTerm}`
	: isEncouragementTerm
		? "『万物』を意味する言葉。対義語："
		: "ゾナ語で『晴れ』を意味する言葉の一種。";
const displayWord = isEmptyQuery ? "\u00a0" : query || "晴れ";
const exampleWord = displayWord === "未入力" ? "晴れ" : displayWord;

const exampleSentence = isEmptyQuery
	? "頑張った先にはが広がってるよ。"
	: isEncouragementTerm
		? `ここまでやったけど、その労力はだし、このARGはこれで${encouragementTerm}だよ。`
		: `昨日の天気って${exampleWord}だったよね。`;

detailQuery.textContent = displayWord;
detailDefinition.textContent = definition;
detailExample.textContent = exampleSentence;

if (isEncouragementTerm) {
	const postLink = document.createElement("a");
	const postText = "【ARG】「ゾナ語」を解いて、ゾナ語をマスターした！ #ゾナ語謎";
	const publicSiteUrl = "https://riddle-sandbox.github.io/zonian-dictionary/";
	postLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(postText)}&url=${encodeURIComponent(publicSiteUrl)}`;
	postLink.textContent = "クリアポストをXに投稿する";
	postLink.className = "button primary post-button";
	postLink.target = "_blank";
	postLink.rel = "noreferrer";
	detailContainer?.append(postLink);
}
