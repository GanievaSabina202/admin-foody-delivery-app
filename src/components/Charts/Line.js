import { ChartStyled } from "./Charts.Styled"

export const ChartLine = () => {

    const option = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [140, 80, 25, 320, 350]
            }
        ]
    }

    return (
        <ChartStyled
            type="line"
            options={option.options}
            series={option.series}
            labels={option.labels}
        />
    )
}