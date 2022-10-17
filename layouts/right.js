import Card from '../components/card'
import ListHeader from '../components/listHeader'

export default function Right() {
    return (
        <div className="layout-right">
            <ListHeader />
            <div className="song-list">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            {/* <div>Placeholder Footer</div> */}
        </div>
    )
}