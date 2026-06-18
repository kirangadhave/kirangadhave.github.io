import marimo

app = marimo.App(width="compact")


@app.cell
def _():
    import marimo as mo
    import altair as alt
    import pandas as pd

    return alt, mo, pd


@app.cell
def _(mo):
    n = mo.ui.slider(1, 20, value=5, label="n")
    n
    return (n,)


@app.cell
def _(mo, n):
    mo.md(
        f"**{n.value}² = {n.value**2}**  ·  the first {n.value} squares: "
        f"{[i**2 for i in range(1, n.value + 1)]}"
    )
    return


@app.cell
def _(n, pd):
    squares = pd.DataFrame(
        {"x": list(range(1, n.value + 1)), "y": [i**2 for i in range(1, n.value + 1)]}
    )
    return (squares,)


@app.cell
def _(alt, squares):
    (
        alt.Chart(squares)
        .mark_line(point=True)
        .encode(
            x=alt.X("x:Q", title="x"),
            y=alt.Y("y:Q", title="x²"),
        )
        .properties(height=320)
    )
    return


if __name__ == "__main__":
    app.run()
