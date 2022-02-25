import { ChartStyled } from "./Charts.Styled"

export const ChartDonut = ({ userCount, orderCount, productCount }) => {

    const option = {
        options: {},
        series: [10, 100, 70, 40],
        labels: ['PRODUCT', 'ORDER', 'USER']
    }

    return (
        <ChartStyled
            type="donut"
            options={option.options}
            series={option.series}
            labels={option.labels}
        />
    )
}