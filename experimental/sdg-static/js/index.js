/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// lodash templates
const BLOCK_TEMPLATE = "./templates/block.template.html";
const SIDEBAR_ITEM_TEMPLATE = "./templates/sidebar_item.template.html";
const CHART_BAR_TEMPLATE = "./templates/charts/bar.template.html";
const CHART_LINE_TEMPLATE = "./templates/charts/line.template.html";
const CHART_MAP_TEMPLATE = "./templates/charts/map.template.html";
const CHART_RANKING_TEMPLATE = "./templates/charts/ranking.template.html";

// Application config path
const SDG_CONFIG = "./config/sdg.json";

// Template cache
const TEMPLATES = {
  block: _.template(""),
  sidebarItem: _.template(""),
  chartBar: _.template(""),
  chartLine: _.template(""),
  chartMap: _.template(""),
  chartRanking: _.template(""),
};

// Global application state
const STATE = {
  sdg: {
    names: [],
    blocks: [],
  },
};

/**
 * Initializes global application state configuration
 */
async function initializeState() {
  const sdgConfig = await (await fetch(SDG_CONFIG)).json();
  STATE.sdg = sdgConfig;
}

/**
 * Fetch and build lodash embedded javascript templates
 */
async function initializeTemplates() {
  // Fetch templates simultaneously
  const blockTemplateRequest = fetch(BLOCK_TEMPLATE);
  const sidebarItemTemplateRequest = fetch(SIDEBAR_ITEM_TEMPLATE);
  const chartBarTemplateRequest = fetch(CHART_BAR_TEMPLATE);
  const chartLineTemplateRequest = fetch(CHART_LINE_TEMPLATE);
  const chartMapTemplateRequest = fetch(CHART_MAP_TEMPLATE);
  const chartRankingTemplateRequest = fetch(CHART_RANKING_TEMPLATE);

  // Wait for content
  const blockTemplateContent = await (await blockTemplateRequest).text();
  const sidebarItemTemplateContent = await (
    await sidebarItemTemplateRequest
  ).text();
  const chartBarTemplateContent = await (await chartBarTemplateRequest).text();
  const chartLineTemplateContent = await (
    await chartLineTemplateRequest
  ).text();
  const chartMapTemplateContent = await (await chartMapTemplateRequest).text();
  const chartRankingTemplateContent = await (
    await chartRankingTemplateRequest
  ).text();

  // Build templates
  TEMPLATES.block = _.template(blockTemplateContent);
  TEMPLATES.sidebarItem = _.template(sidebarItemTemplateContent);
  TEMPLATES.chartBar = _.template(chartBarTemplateContent);
  TEMPLATES.chartLine = _.template(chartLineTemplateContent);
  TEMPLATES.chartMap = _.template(chartMapTemplateContent);
  TEMPLATES.chartRanking = _.template(chartRankingTemplateContent);
}

/**
 * Loads SDG indicator blocks
 */
function renderBlocks() {
  const $mainContainer = $("#main-container");
  STATE.sdg.blocks.forEach((block, index) => {
    const blockId = `sdg-block-${index}`;
    // Render block
    $mainContainer.append(
      TEMPLATES.block({
        title: block.name,
        id: blockId,
      })
    );

    // Render charts
    const $chartContainer = $(`#${blockId}`);
    block.charts.forEach((chart) => {
      renderChart($chartContainer, chart);
    });
  });
}

/**
 * Renders a data commons chart
 */
function renderChart($container, chartConfig) {
  // Create div for the chart-story row
  const rowElement = document.createElement("div");
  rowElement.setAttribute("class", "row");
  $container.append(rowElement);

  // Create div to contain the chart
  const chartColumnElement = document.createElement("div");
  chartColumnElement.setAttribute("class", "col-6");
  chartColumnElement.setAttribute("class", "col-chart");
  rowElement.append(chartColumnElement);
  const $chartColumnElement = $(chartColumnElement);

  if (chartConfig.type == "BAR") {
    $chartColumnElement.append(
      TEMPLATES.chartBar({
        title: chartConfig.config.title,
        place: chartConfig.config.place.dcid,
        childPlaceType: chartConfig.config.enclosedPlaceType,
        variable: chartConfig.config.statVarSpec[0].statVar,
      })
    );
  } else if (chartConfig.type == "LINE") {
    $chartColumnElement.append(
      TEMPLATES.chartLine({
        title: chartConfig.config.title,
        place: chartConfig.config.place.dcid,
        variables: JSON.stringify([chartConfig.config.statVarSpec[0].statVar]),
      })
    );
  } else if (chartConfig.type == "MAP") {
    $chartColumnElement.append(
      TEMPLATES.chartMap({
        title: chartConfig.config.title,
        place: chartConfig.config.place.dcid,
        childPlaceType: chartConfig.config.enclosedPlaceType,
        variable: chartConfig.config.statVarSpec.statVar,
      })
    );
  } else if (chartConfig.type == "RANKING") {
    $chartColumnElement.append(
      TEMPLATES.chartRanking({
        title: chartConfig.config.title,
        place: chartConfig.config.place.dcid,
        childPlaceType: chartConfig.config.enclosedPlaceType,
        variable: chartConfig.config.statVarSpec[0].statVar,
        showLowest: "true",
      })
    );
  } else {
    console.log("Skipping unknown chart type", chartConfig.type);
  }

  //Create section for story
  const storyColumnElement = document.createElement("div");
  storyColumnElement.setAttribute("class", "col-6");
  storyColumnElement.setAttribute("class", "col-story");
  // Create story title
  const storyTitleElement = document.createElement("h4");
  storyTitleElement.textContent = chartConfig.story.title;
  storyColumnElement.append(storyTitleElement);
  // Create story body
  const storyBodyElement = document.createElement("p");
  storyBodyElement.textContent = chartConfig.story.body;
  storyColumnElement.append(storyBodyElement);
  // Append story to row
  rowElement.append(storyColumnElement);
}

/**
 * Renders page sidebar
 */
async function renderSidebar() {
  const $sidebarContainer = $("#sidebar-container");
  STATE.sdg.names.forEach((sdgName, index) => {
    $sidebarContainer.append(
      TEMPLATES.sidebarItem({
        index,
        name: sdgName,
      })
    );
  });
}

/**
 * Application entry point
 */
async function main() {
  await initializeState();
  await initializeTemplates();
  renderSidebar();
  renderBlocks();
}

// Initialize application when window loads
window.onload = () => main();
