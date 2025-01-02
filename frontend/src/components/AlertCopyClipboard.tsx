import { ClipboardIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertCopyClipboard() {
    return (
        <Alert className="fixed bottom-0 right-50 w-full">
            <AlertTitle className="flex items-center gap-3">
                <ClipboardIcon className="h-4 w-4" size={20} />
                Copied
            </AlertTitle>
            <AlertDescription>Link copied to clipboard!</AlertDescription>
        </Alert>
    );
}
