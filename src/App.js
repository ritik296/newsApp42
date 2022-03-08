import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import NewaCard from "./components/NewsCard";
import NewsCard from "./components/NewsCard";

let article = [
  {
    source: {
      id: null,
      name: "CleanTechnica",
    },
    author: "Jake Richardson",
    title: "Tesla Model Y Selected For Sykesville, Maryland, Police Department",
    description:
      "Electric vehicles are more prevalent than ever, and more are on the way. Tesla began delivering the first Model S sedans ten years ago. Prior to that time in 2012, Tesla had delivered about 2,250 Tesla Roadsters, an all-electric 2-seater. Even then, the Roads…",
    url: "https://cleantechnica.com/2022/03/08/tesla-model-y-selected-for-sykesville-maryland-police-department/",
    urlToImage:
      "https://cleantechnica.com/files/2022/03/Screenshot-2022-03-06-1.27.32-PM.png",
    publishedAt: "2022-03-08T15:48:06Z",
    content:
      "Electric vehicles are more prevalent than ever, and more are on the way. Tesla began delivering the first Model S sedans ten years ago. Prior to that time in 2012, Tesla had delivered about 2,250 Tes… [+9094 chars]",
  },
  {
    source: {
      id: "the-irish-times",
      name: "The Irish Times",
    },
    author: null,
    title:
      "Elon Musk claims consent decree used to ‘trample’ on his right to free speech",
    description:
      "‘I would never lie to shareholders. I entered into the consent decree for the survival of Tesla’",
    url: "https://www.irishtimes.com/business/manufacturing/elon-musk-claims-consent-decree-used-to-trample-on-his-right-to-free-speech-1.4821544",
    urlToImage:
      "https://www.irishtimes.com/image-creator/?id=1.4821543&origw=1440",
    publishedAt: "2022-03-08T15:45:10Z",
    content:
      "Tesla chief executive Elon Musk asked a judge to end a 2018 consent decree with the US Securities and Exchange Commission that he claims is being used to trample on Mr Musks First Amendment rights an… [+315 chars]",
  },
  {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "The Associated Press",
    title: "Musk asks judge to nullify subpoena, throw out deal with SEC",
    description:
      "Tesla CEO Elon Musk is asking a federal judge to nullify a subpoena from securities regulators and throw out a 2018 court agreement in which Musk had to have someone pre-approve his posts on Twitter",
    url: "https://abcnews.go.com/Technology/wireStory/musk-asks-judge-nullify-subpoena-throw-deal-sec-83318342",
    urlToImage: "null",
    publishedAt: "2022-03-08T15:44:57Z",
    content:
      "DETROIT -- Tesla CEO Elon Musk is asking a federal judge to nullify a subpoena from securities regulators and throw out a 2018 court agreement in which Musk had to have someone pre-approve his posts … [+1737 chars]",
  },
  {
    source: {
      id: null,
      name: "Jalopnik",
    },
    author: "Erik Shilling",
    title: "There Is A New Diesel Emissions Cheating Scandal",
    description:
      "Toyota’s truck unit says it cheated, Tesla is talking about video games again, and GM. All that and more in The Morning Shift for March 8, 2022.Read more...",
    url: "https://jalopnik.com/there-is-a-new-diesel-emissions-cheating-scandal-1848621456",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6919217729deccf14dd4346a6a39aeaf.png",
    publishedAt: "2022-03-08T15:40:00Z",
    content:
      "Toyotas truck unit says it cheated, Tesla is talking about video games again, and GM. All that and more in The Morning Shift for March 8, 2022.\r\n1st Gear: Hino\r\n I was busy walking a picket line last… [+7086 chars]",
  },
  {
    source: {
      id: null,
      name: "Jalopnik",
    },
    author: "Erik Shilling",
    title: "There Is A New Diesel Emissions Cheating Scandal",
    description:
      "Toyota’s truck unit says it cheated, Tesla is talking about video games again, and GM. All that and more in The Morning Shift for March 8, 2022.Read more...",
    url: "https://jalopnik.com/there-is-a-new-diesel-emissions-cheating-scandal-1848621456",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6919217729deccf14dd4346a6a39aeaf.png",
    publishedAt: "2022-03-08T15:40:00Z",
    content:
      "Toyotas truck unit says it cheated, Tesla is talking about video games again, and GM. All that and more in The Morning Shift for March 8, 2022.\r\n1st Gear: Hino\r\n I was busy walking a picket line last… [+7086 chars]",
  },
  {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Musk asks U.S. judge to end 2018 SEC consent decree - Reuters.com",
    "description": "Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> Chief Executive Elon Musk on Tuesday asked a judge to terminate a 2018 consent decree with the U.S. Securities and Exchange Commission (SEC) stemming from Musk's tweet a…",
    "url": "https://www.reuters.com/business/autos-transportation/musk-asks-us-judge-end-2018-sec-consent-decree-2022-03-08/",
    "urlToImage": "https://www.reuters.com/resizer/mYGXhFeT3lKBh3bVyOXDR3-Q-yQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZOD7YCRFNRLNPBLOD4RLTEQ4XY.jpg",
    "publishedAt": "2022-03-08T15:39:00Z",
    "content": "March 8 (Reuters) - Tesla Inc (TSLA.O) Chief Executive Elon Musk on Tuesday asked a judge to terminate a 2018 consent decree with the U.S. Securities and Exchange Commission (SEC) stemming from Musk'… [+547 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GamesIndustry.biz"
    },
    "author": "Danielle Partis",
    "title": "Gran Turismo 7 | Critical Consensus",
    "description": "New entry puts the iconic racing series back in pole position, but its monetisation may be offputting",
    "url": "https://www.gamesindustry.biz/articles/2022-03-08-gran-turismo-7-critical-consensus",
    "urlToImage": "https://images.gnwcdn.com/2022/articles/2022-03-08-14-57/gt7_slide.jpg",
    "publishedAt": "2022-03-08T15:30:00Z",
    "content": "Share this article\r\nLast Friday saw the release of Gran Turismo 7, the next mainline instalment into the iconic racing series, developed by Polyphony Digital and published by Sony. \r\nIt follows the f… [+8162 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Tomi Kilgore",
    "title": "Mullen Automotive stock surges again, has now more than doubled since snapping record losing streak",
    "description": "Shares of Mullen Automotive Inc. charged 16.1% higher in very active morning trading Tuesday. The electric vehicle maker's stock has already traded in a range of up 6.6% at the intraday low of $1.13, to up 35.8% at the high of $1.44, as trading volume bulged …",
    "url": "https://www.marketwatch.com/story/mullen-automotive-stock-surges-again-has-now-more-than-doubled-since-snapping-record-losing-streak-2022-03-08",
    "urlToImage": "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
    "publishedAt": "2022-03-08T15:29:23Z",
    "content": "Shares of Mullen Automotive Inc. \r\n MULN,\r\n +15.10%\r\ncharged 16.1% higher in very active morning trading Tuesday. The electric vehicle maker's stock has already traded in a range of up 6.6% at the in… [+1067 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Kdnuggets.com"
    },
    "author": "Nisha Arya",
    "title": "Data Science: Reality vs Expectations",
    "description": "In the majority of companies, the executives in charge of data science and the decision-making process using data science, have little or no education or understanding in actual data science. Where does this leave you, the data scientist?",
    "url": "https://www.kdnuggets.com/2022/03/data-science-reality-expectations.html",
    "urlToImage": "https://www.kdnuggets.com/wp-content/uploads/data_science_reality_expectations_2.jpg",
    "publishedAt": "2022-03-08T15:00:36Z",
    "content": "When you tell people youre a Data Scientist, it comes with a lot of assumptions and high expectations. Each company has its unique definition of what a Data Scientist does, this is dependent on their… [+6186 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Autoblog"
    },
    "author": "James Riswick",
    "title": "Lincoln is changing the way it sells cars (for the better)",
    "description": "Filed under:\n Marketing/Advertising,Lincoln,Car Buying,Car Dealers\n Continue reading Lincoln is changing the way it sells cars (for the better)\nLincoln is changing the way it sells cars (for the better) originally appeared on Autoblog on Tue, 8 Mar 2022 10:00…",
    "url": "https://www.autoblog.com/2022/03/08/lincoln-dealer-model/",
    "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/03/07164811/Sanderson-Lincoln-Boutique.jpg",
    "publishedAt": "2022-03-08T15:00:00Z",
    "content": "Tucked inside an outdoor shopping complex in Scottsdale, Arizona, among various trendy stores is something one wouldve thought hilariously out of place not so long ago: a Lincoln dealer. But this isn… [+5990 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TheStreet"
    },
    "author": "Stephen Guilfoyle",
    "title": "Should You Buy the Dip in Amazon? Here's My Take",
    "description": "For the life of me I cannot figure out why CEO Andy Jassy has shown to this point no interest in splitting the stock....AMZN",
    "url": "https://realmoney.thestreet.com/investing/should-you-buy-the-dip-in-amazon-here-s-my-take-15932097",
    "urlToImage": "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/c46f438b-442b-11ea-86dc-6388aab8b07f.jpg",
    "publishedAt": "2022-03-08T15:00:00Z",
    "content": "Buy the dip in Amazon (AMZN) ? That is the question. In full disclosure, I sold my stake in Amazon last week. I am considering a re-entry. You may be considering an entry, re-entry like me, or an add… [+5638 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "PTI",
    "title": "NSE IFSC completes physical settlement of US stocks",
    "description": "To start with, NSE IFSC commenced trading in major US stocks like Apple, Alphabet, Amazon, Microsoft, Meta Platforms, Tesla to be settled on a rolling T+3 day basis through its Clearing Corporation Ltd (NICCL).",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/nse-ifsc-completes-physical-settlement-of-us-stocks/articleshow/90082813.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-90082825,width-1070,height-580,imgsize-15674,overlay-etmarkets/photo.jpg",
    "publishedAt": "2022-03-08T14:59:27Z",
    "content": "New Delhi: NSE International Exchange (NSE IFSC) on Tuesday announced the first physical settlement of US stocks in the form of unsponsored depository receipts at IFSC in GIFT City. This is the first… [+1296 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Livemint"
    },
    "author": "WSJ",
    "title": "China car sales snap eight-month losing streak",
    "description": "Retail sales of passenger cars in February rose 4.2% from a year earlier to 1.25 million vehicles",
    "url": "https://www.livemint.com/companies/china-car-sales-snap-eight-month-losing-streak-11646750465900.html",
    "urlToImage": "https://images.livemint.com/img/2022/03/08/600x338/VOLKSWAGEN-EMISSIONS-OHIO-0_1646751202152_1646751218162.JPG",
    "publishedAt": "2022-03-08T14:54:11Z",
    "content": "Chinas car sales snapped an eight-month streak of on-year declines as the worlds largest auto market started to recover from Covid-19 disruptions and supply chain headwinds.\r\nRetail sales of passenge… [+1733 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "Breitbart",
    "title": "Multimillionaire Stephen Colbert Dismisses Soaring Gas Prices: ‘A Clean Conscience Is Worth a Buck or Two’",
    "description": "Let Them Eat Lithium. Left-wing CBS late-night host Stephen Colbert, who boasts a reported personal net worth of approximately $75 million, professes to being entirely untroubled by soaring U.S. gas prices, admitting he takes comfort in the fact he drives a T…",
    "url": "https://freerepublic.com/focus/f-news/4044779/posts",
    "urlToImage": null,
    "publishedAt": "2022-03-08T14:53:05Z",
    "content": "Skip to comments.\r\nMultimillionaire Stephen Colbert Dismisses Soaring Gas Prices: A Clean Conscience Is Worth a Buck or TwoBreitbart ^\r\n | 03/08/2022\r\n | Simon Kent\r\nPosted on 03/08/2022 6:53:05 AM P… [+5243 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "PRNewswire"
    },
    "author": null,
    "title": "Lectron Debuts Extensive Line of Electric Vehicle Products Amidst Heightened Demand Across Private and Public Sectors",
    "description": "MOUNTAIN VIEW, Calif., Feb. 24, 2022 /PRNewswire/ -- Lectron has officially announced its expansive product portfolio to support electric vehicle owners with all of their charging needs. Recognizing the push for more EV infrastructure, Lectron is quickly beco…",
    "url": "https://www.prnewswire.com/news-releases/lectron-debuts-extensive-line-of-electric-vehicle-products-amidst-heightened-demand-across-private-and-public-sectors-301497963.html",
    "urlToImage": "https://mma.prnewswire.com/media/1760031/VBOX_Brett.jpg?p=facebook",
    "publishedAt": "2022-03-08T14:44:00Z",
    "content": "\"Lectron is pioneering ways of solving range anxiety at home and on the road for both Tesla and non-Tesla EV owners, thereby helping to bring about the widespread adoption of sustainable transportati… [+2336 chars]"
    }
];
function App() {
  return (
    <>
      <Navbar />
      <div className="row g-3 m-2 justify-content-center cara_view">
        {article.map((element) => {
          return (
            <NewsCard
              imageUrl={element.urlToImage}
              title={element.title}
              description={element.description}
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
