import React from 'react'
import { ChartLine } from '../../components/Charts/Line'
import { ChartDonut } from "../../components/Charts/Donut";
import Grid from '@mui/material/Grid';
import { DashboardContainer, ItemDonut, ItemLine, ItemAssignedRisks, AssignedActionItems } from './components/DashboardCard.Styled';


export const Dashboard = () => {

    return (
        <DashboardContainer>
            <div>
                <Grid container spacing={2} >
                    <Grid item lg={5} md={6} sm={12} xs={12}>
                        <ItemDonut>
                            <h2>Orders</h2>
                            <ChartDonut />
                        </ItemDonut>
                    </Grid>
                    <Grid item lg={7} md={6} sm={12} xs={12}>
                        <ItemLine>
                            <h2>Total Salary</h2>
                            <ChartLine />
                        </ItemLine>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={2} >
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <ItemAssignedRisks>

                            <h2>Assigned Risks</h2>
                        </ItemAssignedRisks>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <AssignedActionItems>
                            <h2>Assigned Action Items</h2>
                        </AssignedActionItems>
                    </Grid>
                </Grid>
            </div>
        </DashboardContainer >
    )
}
