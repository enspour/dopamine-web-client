import { FC, memo } from "react";

import SuggestionsList from "./SuggestionsList";

import styles from "./Suggestions.module.scss";

const Suggestions: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.suggestions}>
                <div className={styles.suggestions__header}>
                    <div>Suggested for you</div>
                    <div>See All</div>
                </div>

                <SuggestionsList />
            </div>
        </div>
    );
};

export default memo(Suggestions);
