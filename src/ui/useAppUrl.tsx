import { useEffect, useState } from "react";

export const useAppUrl = () => {
  const [serverUrl, setServerUrl] = useState("");
	useEffect(() => {
		setServerUrl(window.location.href);
	}, [])

  return serverUrl;
}