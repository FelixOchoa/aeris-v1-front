'use client';

import plannings from "@/helpers/plannings.json";
import { Button, Table } from "antd";
import { Eye, SquarePen, Trash2 } from "lucide-react";
export default function Home() {
  console.log(plannings);
  return (
    <div className="flex min-h-screen justify-center bg-zinc-100 font-sans">
      <div className="container mt-20 px-4">
        <div className="flex justify-between sm:items-center sm:flex-row flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">Planeaciones</h1>
            <span className="text-sm text-zinc-500">Visualiza, crea y administra tus planeaciones.</span>
          </div>
          <Button type="primary">Crear nueva planeación</Button>
        </div>
        <div>
          <Table dataSource={plannings.lessonPlans} rowKey="id" className="mt-6" bordered size="middle" pagination={{ defaultPageSize: 10, showSizeChanger: false}}>
            <Table.Column title="Nombre" dataIndex="lessonPlanName" key="name" />
            <Table.Column title="Tema" dataIndex="topic" key="topic" />
            <Table.Column title="Asignatura" dataIndex="subject" key="course" render={
              (text: string) => <span className="capitalize bg-zinc-200 rounded-xl py-1 px-2 font-semibold text-zinc-500 text-xs">{text}</span>
            } />
            <Table.Column title="Grado" dataIndex="grade" key="grade" />
            <Table.Column title="Fecha de Creación" dataIndex="creationDate" key="createdAt" />
            <Table.Column title="Acciones" key="actions" render={(_, record) => (
              <div className="flex gap-4 text-zinc-500 items-center justify-center">
                <Eye size={20} className="cursor-pointer hover:text-blue-400 transition-colors"/>
                <SquarePen size={20} className="cursor-pointer hover:text-blue-400 transition-colors"/>
                <Trash2 size={20} className="cursor-pointer hover:text-blue-400 transition-colors"/>
              </div>
            )} />
          </Table>
        </div>
      </div>
    </div>
  );
}
