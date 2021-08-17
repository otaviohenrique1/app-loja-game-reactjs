import { ContainerApp } from "../../components/ContainerApp";

export function Dashboard() {
  return (
    <ContainerApp>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1>Dashboard</h1>
      </div>
    </ContainerApp>
  );
}