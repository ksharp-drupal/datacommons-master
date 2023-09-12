﻿export const commonConstants = {
  DEFAULT_VARIABLE: [],
  UNITED_NATIONS_STATISTICAL_COMMISSION:
    "United Nations Statistical Commission",
  BASE_URL: process.env.PUBLIC_URL,
  IMAGE_PATH: "./images/",
  //adding our own path for photo gallery on statcom
  IMAGE_PATH_Statcom: "https://unstats.un.org/unsd/statcom",
  ABSOLUTE_IMAGE_PATH: "/images/",
  //adding our own path for past syb files:
  PDF_PATH_SYB: "./publication/statistical-yearbook/files/",
  PDF_PATH_57: "./publication/statistical-yearbook/files/syb57/",
  PDF_PATH_63: "./publication/statistical-yearbook/files/syb63/",
  TWITTER_URL: "https://twitter.com/UNStats",
  YOUTUBE_URL: "https://www.youtube.com/user/UNStats",
  COPYRIGHT: "https://www.un.org/en/about-us/copyright",
  FRAUD_ALERT: "https://www.un.org/en/about-us/fraud-alert",
  PRIVACY_NOTICE: "https://www.un.org/en/about-us/privacy-notice",
  TERMS_OF_USE: "https://www.un.org/en/about-us/terms-of-use",
  TOASTER_DURATION: 3000,
  TOASTER_POSITION: "top-right",
  BODY_DIRECTION_RIGHT: "rtl",
  BODY_TEXT_ALIGN_RIGHT: "right",
  BODY_DIRECTION_LEFT: "ltr",
  BODY_TEXT_ALIGN_LEFT: "left",
  LANGUAGE_ARABIC: "ar",
  DEFAULT_LANGUAGE: "en",
  SETTRUE: true,
  SETFALSE: false,
  CURRENT_SESSION: 54,
  ERROR_MESSAGE: "Something went wrong!",
  SESSION_DOCUMENT_PATH: "",
  STATCOM_DOCUMENT_BASE_PATH: "https://unstats.un.org/unsd/statcom/",
  EACHPAGESIZE: 12,
  //updated the page size from 10 to 12
  SHOWPAGESIZECHANGER: false,
  //updated page size navigation to multiple of 12 which used to be a multiple of 10, works well with ststcom past chairs
  PAGESIZEOPTIONS: ["12", "24", "36", "48", "60"],
    CD_PAGESIZEOPTIONS: ["6", "12", "24", "48"],
  CURRENTPAGE: 1,
  VIEW_RECORD_MAX: 10,
  READMORE_MAX: 3,
  SEARCH: "Search",
  CurrentPage: "CurrentPage",
  PageSize: "PageSize",
  RandomString: "RandomString",
  DEFAULT_IMAGE: "img-event01.jpg",
  E_LEARNING_URL: "https://learning.officialstatistics.org/",
  FPOS_URL: "https://unstats.un.org/fpos/",
  CCSA_PRINCIPAL_URL:
    "https://unstats.un.org/unsd/ccsa/principles_stat_activities/",
  COMTRADE_URL: "https://comtrade.un.org/",
  UNDATA_URL: "http://data.un.org/",
  UNINDICATOR_URL: "https://unstats.un.org/sdgs/indicators/database/",
  NSO_SITES_URL: "https://unstats.un.org/home/nso_sites/",
  CCSA_URL: "https://unstats.un.org/unsd/ccsa/",
  UNSYSTEM_URL: "https://unstats.un.org/unsd/unsystem/",
  INTERNALTIONAL_URL: "https://unstats.un.org/home/international_agencies/",
  LOADING: "Loading",
  DEFAULT_IMAGE: "DefaultImage.png",
  DEFAULT_CALENDAR_FORMAT: "DD-MM-YYYY",
  /* constants for News Page and Statements page*/
  STATEMENTTITLE: "StatementTitle",
  STATEMENTYEAR: "StatementYear",
  STATEMENTTYPE: "StatementType",
  NEWSYEAR: "NewsYear",
  NEWSTITLE: "NewsTitle",
  SELECTYEAR: "Select Year",
  QUESTIONNAIRESDOMAIN: "QuestionnairesDomain",
  QUESTIONNAIRESTOPIC: "QuestionnairesTopic",
  SELECTDOMAIN: "Select Domain",
  SELECTTYPE: "Select Type",
  PDF: "PDF",
  VIDEO: "Video",
  FILTER_BY_YEAR: "Year",
  FILTER_BY_DOMAIN: "Domain",
  FILTER_BY_DATE: "Dates",
  SEARCH_BY_TITLE: "Title",
  FILTER_BY_STAT_TYPE: "Type",
  TOP_NEWS_COUNT: 8,
    DATAFORNOW: "datafornow",
    DATAFORNOWTEXT: "Data For Now",
    CAPACITYDEVELOPMENT: "Capacity Development",
  /* constants for News Page and Statements page*/

  SORTOPTIONS: [
    { label: "Name (A-Z)", value: "title_asc" },
    { label: "Name (Z-A)", value: "title_desc" },
    { label: "Date (Oldest to Latest)", value: "date_asc" },
    { label: "Date (Latest to Oldest)", value: "date_desc" },
  ],
  DEFAULT_SORT_VALUE: "date_desc",
    DEFAULT_ALL_VALUE: "all",
  PAGE_TITLE: "UNSD - Welcome to UNSD",
  PAGE_TITLE_EVENTS: "UNSD - Calendar of events",
    PAGE_TITLE_NQAF: "UNSD – Data quality",
    PAGE_TITLE_RESOURCE_CATALOG: "UNSD – Admin data collaborative",
    PAGE_TITLE_DATA_FOR_NOW: "UNSD - Data for Now",
    PAGE_TITLE_CAPACITY_DEVELOPMENT: "UNSD - Capacity development",
  // USED in BreadCrumb and Title
  ABOUT: "About",
  ABOUT_US: "About Us",
  EVENTS: "Events",
    HOME: "UNSD",
  EXPAND_ALL: "Expand All",
  COLLAPSE_ALL: "Collapse All",
  DEFAULT_SELECT_VALUE: "Select",
  TRACKING_ID: "UA-48267274-1",
};
export const FilterParamsConstants = {
    ProjectNameParam: "Projectname",
    CountryNameParam: "Countryname",
    Type: "type",
    Id: "Id"
}

export const allInitiativeFilter = [
    { label: "CapacityDevelopment", value: "CapacityDevelopment" }
]