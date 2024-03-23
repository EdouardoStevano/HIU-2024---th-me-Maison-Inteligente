import React, { useEffect, useState } from 'react'

//importation des Assets 
import ValidationIcon from "presentation/assets/image/icons/ValidationIcon.svg"
import CommentIcon from "presentation/assets/image/icons/CommentIcon.svg"
import ShowIcon from "presentation/assets/image/icons/showIcon.svg"

// importation du style
import "./globaleTable.scss"
import { NavLink } from 'react-router-dom'

/*
* Composant pour le tableau globale
*/
const GlobaleTable = ({ columns, data , keys, onCommentClick ,onDetailsClick }) => {

    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const renderCellContent = (row, column) => {
        switch (column) {
            case 'detail':
                return <img src={ShowIcon} alt="Detail" onClick={() => onDetailsClick(row)} className='tableIcon'/>;
            case 'tracking':
                return <NavLink to={"/dashboard/tracking"}><img src={ShowIcon} alt="Detail" onClick={() => onDetailsClick(row)} className='tableIcon'/></NavLink>
            case 'comments':
                return <img src={CommentIcon} alt="Comment" onClick={() => onCommentClick(row)} className='tableIcon'/>;
            case 'applicant':
                return row.applicant.username;
            case 'department':
                return row.applicant.department;
            case 'commentaryArticle':
                let rowCommentaryArtcileColor = "";
                let rowCommentaryArtcile = "";
                switch (row[column]) {
                    case null:
                        rowCommentaryArtcileColor = "#454545";
                        rowCommentaryArtcile = "pas de commentaire";
                        break;
                    default:
                        rowCommentaryArtcileColor = "#454545";
                        rowCommentaryArtcile = row.comment;
                        break;
                }
                return <span style={{ color: rowCommentaryArtcileColor, fontWeight: "600" }}>{rowCommentaryArtcile}</span>;
            case 'priority':
                let colorPriority = "";
                let textPriority = "";
                switch (row[column]) {
                    case "EVENEMENT":
                        colorPriority = "#40AFFF";
                        textPriority = "EVENEMENT";
                        break;
                    case "HIGH":
                        colorPriority = "#2B9D59";
                        textPriority = "HIGH";
                        break;
                    case "MEDIUM":
                        colorPriority = "#FFC70";
                        textPriority = "MEDIUM";
                        break;
                    case "LOW":
                        colorPriority = "#CB2B21";
                        textPriority = "LOW";
                        break;
                    default: 
                        colorPriority = "#D9D9D9";
                        textPriority = "Pas de donnée";
                        break;
            }
            return <span style={{ color: colorPriority, fontWeight: "500" }}>{textPriority}</span>
            case 'stage_validation':
                let color = "";
                let text = "";
                switch (row[column]) {
                    case 0:
                        color = "#FFC700";
                        text = "En attente de validation du RD";
                        break;
                    case 1:
                        color = "#2B9D59";
                        text = "En attente de validation du CF";
                        break;
                    case 2:
                        color = "#2B9D59";
                        text = "Déjà livré";
                        break;
            }
            return <span style={{ color , fontWeight: "600"}}>{text}</span>
            case 'date_request':
                const formattedDate = new Date(row[column]).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
                return formattedDate;
            case 'validation':
                return <img src={ValidationIcon} alt="Comment" onClick={() => onDetailsClick(row)} className='tableIcon'/>
            case 'checked':
                 return <input type='checkbox' className='checkbox-global' />
            default:
                return row[column];
        }
    };

  return (
    <div className='w-p100'>
        <table className="globale-table">
            <thead>
                <tr>
                {columns.map(column => (
                    <th key={column} className="custom-table-header">{column}</th>
                ))}
                </tr>
            </thead>

            <tbody>
                {/* Vérifier si les données sont définies */}
                {data && data.length > 0 ? (
                // Si les données sont définies et non vides, afficher les lignes
                data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="custom-table-row">
                        {keys.map((column, colIndex) => (
                            <td key={colIndex} className="custom-table-cell">
                                <span>
                                    {renderCellContent(row, column)}
                                </span>
                            </td>
                        ))}
                    </tr>
                ))
                ) : (
                // Sinon, afficher une ligne vide
                <tr className="empty-cell">
                    <td colSpan={columns.length} className="custom-empty-cell">
                        {/* <img src={NoDataImage} alt="no data image"/> */}
                        <span>
                            Pas de demande en cours
                        </span>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default GlobaleTable