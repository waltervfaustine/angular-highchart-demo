export interface ChartData {
    chart: Chart;
    title: Title;
    xAxis: XAxis;
    yAxis: YAxis;
    legend: Legend;
    tooltip: Tooltip;
    plotOptions: PlotOptions;
    series: SeriesItem[];
}
export interface Chart {
    type: string;
}
export interface Title {
    text: string;
}
export interface XAxis {
    categories: string[];
}
export interface YAxis {
    min: number;
    title: Title;
    stackLabels: StackLabels;
}
export interface StackLabels {
    enabled: boolean;
    style: Style;
}
export interface Style {
    fontWeight: string;
    color: string;
}
export interface Legend {
    align: string;
    x: number;
    verticalAlign: string;
    y: number;
    floating: boolean;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    shadow: boolean;
}
export interface Tooltip {
    headerFormat: string;
    pointFormat: string;
}
export interface PlotOptions {
    column: Column;
}
export interface Column {
    stacking: string;
    dataLabels: DataLabels;
}
export interface DataLabels {
    enabled: boolean;
    color: string;
}
export interface SeriesItem {
    name: string;
    data: number[];
}
