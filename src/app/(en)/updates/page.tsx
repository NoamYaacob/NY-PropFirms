import { CopyPage, copyMeta } from "@/components/copy/CopyPage";
import { Wrap } from "@/design-system/Blocks";
import { UpdatesFilter } from "@/components/updates/UpdatesFilter";

export const metadata = copyMeta("updates");

export default function UpdatesPage() {
  return (
    <CopyPage
      name="updates"
      special={{ UPDATES_FEED: <p className="ds-hint">No updates logged yet.</p>, CORRECTIONS_LOG: "No corrections logged yet." }}
      sections={{
        Filter: {
          replace: (
            <Wrap>
              <h2 className="ds-h2">Filter</h2>
              <div className="mt-2">
                <UpdatesFilter />
              </div>
            </Wrap>
          ),
        },
      }}
    />
  );
}
