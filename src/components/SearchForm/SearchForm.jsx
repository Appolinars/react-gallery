import styles from "./SearchForm.module.scss";

export const SearchForm = (props) => {
    return (
        <form className={styles.search} onSubmit={props.searchImg}>
            <input
                type="text"
                className={`${styles.search__input} ${props.isInputFilled === false ? styles.search__inputError : ""
                    }`}
                name={"searchText"}
                placeholder={
                    props.isInputFilled === false ? "Type something here" : "Search for images"
                }
                autoComplete={"off"}
                onChange={props.setSearchText}
            />
            <select
                className={styles.search__select}
                name="amount"
                onChange={props.changeAmount}
                defaultValue={"Default"}
            >
                <option value="Default" disabled>
                    Change amount
                    </option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="100">100</option>
                <option value="200">200</option>
            </select>
            <div className={styles.search__btnWrapper}>
                <button className={styles.search__btn}>Search</button>
            </div>
        </form>
    )
}

export default SearchForm;
