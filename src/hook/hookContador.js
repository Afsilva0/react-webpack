

import { React, useState, useEffect } from "react";


function useContadorHook() {
    const [numero, setNumero] = useState(0);

    return {
        numero,
        setNumero
    }
}