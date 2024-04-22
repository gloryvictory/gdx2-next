import { getReportsByQuery } from "@/app/actions/getAll";
import { IResultReport } from "@/app/types";
import { Tooltip } from "antd";



export default async function TheReport({
  q  
}: {
  q: string | undefined;
}) {
  
  const items : IResultReport = await getReportsByQuery(q);

return (
  <>
  <div className="mt-20">
    <h1>Отчетов: <strong>{items.count}</strong> </h1>

    {/* <ol type="1" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"> */}
    <ol className="marker:text-sky-400 pl-5 space-y-3 text-slate-500 list-decimal ml-10 ">
      {items.data.map((item: any ) => (                
        <Tooltip key={item.id} placement="right" title={ 'Дата обновления: ' + new Date(item.lastupdate).toLocaleDateString('ru-RU')} >
          <li key={item.id} className="box-border rounded bg-slate-100 w-full pl-2 hover:bg-slate-700 hover:text-sky-400 hover:shadow-xl" > 
              <span className="font-mono">{item.report_name}</span>
          </li>
        </Tooltip>
      ))}
    </ol>
  </div>
  </>
);
}
