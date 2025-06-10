import { useIdeology } from "../hooks/useIdeology";

export default function ThoughtCard() {
  const { data, isLoading, isError, error } = useIdeology();

  return (
    <div className="thoughts-content">
      {isLoading && <p>Đang tải dữ liệu...</p>}
      {isError && <p className="text-red-500">Lỗi: {(error as Error).message}</p>}
      {!isLoading && data?.length === 0 && <p>Không có dữ liệu nào.</p>}

      {data?.map((item, idx) => (
        <div key={idx} className="thought-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
