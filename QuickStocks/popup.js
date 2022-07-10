var greeting = "Company: ";
var result = "";
var image = "";

const companies = {"google": "GOOG","apple": "AAPL","samsung": "005930.KS","amazon": "AMZN","microsoft": "MSFT","mcdonald's": "MCD","facebook": "META","twitter": "TWTR","shell": "SHEL","pepsi": "PEP","coca-cola": "KO","walmart": "WMT","nike": "NKE",
"adidas": "ADS.DE","volkswagen": "VOW3.DE","toyota": "TM","costco": "COST","ford": "FORD","tesla": "TSLA", "roblox": "RBLX", "pfizer": "PFE", "cvs": "CVS", "zoom": "ZM", "kroger": "KR", "revlon": "REV", "hyundai": "HYMTF", "nissan": "7201.T",
"intel": "INTC", "ibm": "IBM", "disney": "DIS", "mastercard": "MA", "visa": "V", "alibaba": "BABA", "nokia": "NOK"};

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  let title = tabs[0].title;   

  let name_so_far = "";
  for (let i = 0; i < title.length; i++) {
    for (let j = i; j < title.length; j++) {
      if (title[j].toLowerCase() != title[j].toUpperCase()){
        name_so_far += title[j].toLowerCase();
      } else {
        name_so_far += title[j]
      }
      if (name_so_far in companies){
        result = name_so_far;
        i = j = 1000;
        break;
      }
    }
    name_so_far = "";
  }

  if (result == ""){
    name_so_far = "Unknown";
    image = "images/questionMark.jpg";
  } else {
    name_so_far = result;
    image = "images/" + name_so_far + "Logo.jpg";
  }

  let google_stock_search = "https://www.google.com/search?q=" + name_so_far + "+stock";
  let google_news_search = "https://www.google.com/search?q=" + name_so_far + "+news";
  let yahoo_search = "https://ca.finance.yahoo.com/quote/" + companies[name_so_far] + "?p=" + companies[name_so_far] + "&.tsrc=fin-srch";
  let cnbc_search = "https://www.cnbc.com/quotes/" + companies[name_so_far];
  let forbes_search = "https://www.forbes.com/companies/" + name_so_far;

  document.getElementById("greeting").innerHTML = greeting + name_so_far;
  document.getElementById("google_stock_link").setAttribute("href", google_stock_search);
  document.getElementById("google_news_link").setAttribute("href", google_news_search);
  document.getElementById("yahoo_link").setAttribute("href", yahoo_search);
  document.getElementById("cnbc_link").setAttribute("href", cnbc_search);
  document.getElementById("forbes_link").setAttribute("href", forbes_search);
  document.getElementById("company_image").setAttribute("src", image);
});
