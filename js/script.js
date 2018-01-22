// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes = [];
quotes.push({
	quote: "Those who dare to fail miserably can achieve greatly.",
	source: "John F. Kennedy"
});
quotes.push({
	quote: "The true sign of intelligence is not knowledge but imagination.",
	source: "Albert Einstein"
});
quotes.push({
	quote: "The coldest winter I ever spent was a summer in San Francisco.",
	source: "Mark Twain"
});

quotes.push({
	quote: "You can do anything, but not everything.",
	source: "David Allen",
	citation: "Making It All Work",
	year: 2009
});

function getRandomQuote() {
	var the_size = quotes.length;
	var the_random =Math.floor(Math.random() * the_size);
	return quotes[the_random];
}

function printQuote() {
	var the_selected = getRandomQuote();
	var the_quote = the_selected.quote;
	var the_source = the_selected.source;
  var q = document.getElementsByClassName("quote");
  var s = document.getElementsByClassName("source");
  var i;
  for(i=0;i<q.length;i++){
  	q[i].innerHTML = the_quote;
  }
   var source_to_change = s[0].childNodes[0];
	 source_to_change.nodeValue = the_source;
   
	if (the_selected.hasOwnProperty("citation"))
	{
		var the_citation = the_selected.citation;
		if((s[0].childNodes.length == 1) || (s[0].childNodes[1].className != "citation"))
	  {
		var new_citation = document.createElement("span");
		new_citation.className = "citation";
		new_citation.textContent = the_citation;
		s[0].appendChild(new_citation);
	  }
	  else
	  {
	  	var changed_cite = document.getElementsByClassName("citation");
	  	changed_cite[0].innerHTML = the_citation;
	  }
	}
	else
	{
		var citation_text = document.getElementsByClassName("citation");
		citation_text[0].parentNode.removeChild(citation_text[0]);
  }

	if (the_selected.hasOwnProperty("year"))
	{ 
		var the_year = the_selected.year;
		if((s[0].childNodes.length == 1) || (s[0].childNodes[1].className != "year" && s[0].childNodes.length == 2) || (s[0].childNodes.length == 3 && s[0].childNodes[2].className != "year"))
	  {
		var new_year = document.createElement("span");
		new_year.className = "year";
		new_year.innerHTML = the_year;
		s[0].appendChild(new_year);
		}
		else
		{
			var changed_year = document.getElementsByClassName("year");
	  	changed_year[0].innerHTML = the_year;
		}
	}
	else
	{
		var year_text = document.getElementsByClassName("year");
		year_text[0].parentNode.removeChild(year_text[0]);
  }
}
