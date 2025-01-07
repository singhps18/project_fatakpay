export const DASHBOARD_CONFIG: Array<{
    id: string;
    component: 'ChartComponent' | 'TableComponent';
    position: { x: number; y: number };
    size: { width: number; height: number };
  }> = [
    { id: 'chart1', component: 'ChartComponent', position: { x: 0, y: 0 }, size: { width: 300, height: 200 } },
    { id: 'table1', component: 'TableComponent', position: { x: 300, y: 0 }, size: { width: 300, height: 200 } },
  ];
  